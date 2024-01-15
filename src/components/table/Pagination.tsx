"use client";
import React, { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
    StyledArrowLeft,
    StyledArrowRight,
    StyledBoldText,
    StyledImageButton,
    StyledLink,
    StyledRow,
} from "@/components/styled";

export const Pagination = ({
    totalCountPages,
    isFirstPage
}: {
    totalCountPages?: number;
    isFirstPage: boolean
}) => {
    const params = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();
    const page = isFirstPage ? 1 : (Number(params.get("page")) || 1);

    const changePage = useCallback(
        (newPage: number) => {
            const searchParams = new URLSearchParams(params);
            searchParams.set("page", String(newPage));
            replace(`${pathname}?${searchParams.toString()}`);
        },
        [params, pathname, replace],
    );

    const possiblePages = useMemo(() => {
        const nextPages = [];
        const previousPages = [];
        let maxPage;
        if (page > 0) {
            for (let i = 2; i > 0; i--) {
                if (page - i > 0) {
                    previousPages.push(page - i);
                }
            }
        }
        if (totalCountPages) {
            maxPage = totalCountPages;
            if (page < maxPage) {
                for (let i = 1; i < 3; i++) {
                    if (page + i > maxPage) {
                        break;
                    }
                    nextPages.push(page + i);
                }
            }
        }
        return { previous: previousPages, next: nextPages, maxPage };
    }, [page, totalCountPages]);
    const onNextPage = () => {
        changePage(page + 1);
    };

    const onPreviousPage = () => {
        changePage(page - 1);
    };

    return (
        <StyledRow>
            {page > 1 ? (
                <StyledImageButton onClick={onPreviousPage}>
                    <StyledArrowLeft />
                </StyledImageButton>
            ) : null}
            {possiblePages.previous.map((item) => {
                return (
                    <StyledLink href={`/table?page=${item}`} key={item}>
                        <p> {item} </p>
                    </StyledLink>
                );
            })}
            <StyledBoldText> {page} </StyledBoldText>
            {possiblePages.next.map((item) => {
                return (
                    <StyledLink href={`/table?page=${item}`} key={item}>
                        <p> {item} </p>
                    </StyledLink>
                );
            })}
            {possiblePages.next.length &&
            possiblePages.next[possiblePages.next.length - 1] !==
                possiblePages.maxPage ? (
                    <>
                        <span> ... </span>
                        <StyledLink href={`/table?page=${possiblePages.maxPage}`}>
                            <p> {possiblePages.maxPage} </p>
                        </StyledLink>
                    </>
                ) : null}
            {totalCountPages && page < totalCountPages ? (
                <StyledImageButton onClick={onNextPage}>
                    <StyledArrowRight />
                </StyledImageButton>
            ) : null}
        </StyledRow>
    );
};
