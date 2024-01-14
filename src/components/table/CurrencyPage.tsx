"use client";
import React from "react";
import useSWR from "swr";
import { fetchCurrencyWithMeta } from "@/api/currency";
import { CurrencyTable } from "@/components/table/CurrencyTable";
import { useSearchParams } from "next/navigation";
import { PAGE_SIZE } from "@/constants";
import { LoadingSceleton } from "@/components/LoadingSceleton";

export const CurrencyPage = () => {
    const params = useSearchParams();
    const page = Number(params.get("page")) || 1;

    const { data, isLoading, error } = useSWR(
        page > 1 ? `limit=${PAGE_SIZE}&offset=${page * PAGE_SIZE}` : null,
        () =>
            fetchCurrencyWithMeta({
                historicalPrice: true,
                offset: page * PAGE_SIZE,
                limit: PAGE_SIZE,
            }),
    );

    if (isLoading) return <LoadingSceleton />;
    if (error) {
        console.log("error:", error, data);
        return "error";
    }

    return data?.items ? <CurrencyTable data={data?.items || []} /> : null;
};
