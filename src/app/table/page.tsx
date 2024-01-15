import { fetchCurrencyWithMeta } from "@/api/currency";
import { CurrencyPage } from "@/components/table/CurrencyPage";
import { CurrencyTable } from "@/components/table/CurrencyTable";
import React from "react";
import { SWRProvider } from "@/components/util/SWRProvider";
import { PAGE_SIZE } from "@/constants";
import { Pagination } from "@/components/table/Pagination";
import { StyledHeader } from "@/components/styled";

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const data = await fetchCurrencyWithMeta({
        historicalPrice: true,
        limit: PAGE_SIZE,
        offset: 0,
    });

    const totalPages: number | undefined =
        data?.meta?.count && Math.ceil(data.meta.count / PAGE_SIZE);
    
    const isFirstPage = !searchParams?.page ||
    searchParams?.page === "1" ||
    isNaN(Number(searchParams?.page)) ||
    (totalPages && totalPages < Number(searchParams?.page)) ||
    Number(searchParams?.page) < 0;

    return (
        <SWRProvider>
            <StyledHeader> Cryptocurrency Table </StyledHeader>
            {isFirstPage ? (
                <CurrencyTable data={data?.items || []} />
            ) : <CurrencyPage />}
            <Pagination isFirstPage={isFirstPage} totalCountPages={totalPages} />
        </SWRProvider>
    );
}
