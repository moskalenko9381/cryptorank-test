"use client";

import React from "react";
import { fetchCurrencyWithMeta } from "@/api/currency";
import useSWR from "swr";
import { ConverterComponent } from "@/components/converter/ConverterComponent";
import { LoadingSceleton } from "@/components/LoadingSceleton";

export const ConverterContainer = () => {
    const { data, isLoading } = useSWR("/api/converter", () =>
        fetchCurrencyWithMeta({
            limit: 1000,
            offset: 0,
        }),
    );

    if (isLoading) {
        return <LoadingSceleton />;
    }
    return <ConverterComponent data={data?.items || []} />;
};
