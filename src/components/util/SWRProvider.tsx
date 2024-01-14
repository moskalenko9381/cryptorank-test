"use client";
import { SWRConfig } from "swr";
import { ReactNode } from "react";

export const SWRProvider = ({ children }: { children: ReactNode }) => {
    return (
        <SWRConfig
            value={{
                refreshInterval: 1800000,
                revalidateIfStale: false,
                revalidateOnFocus: false,
            }}
        >
            {children}
        </SWRConfig>
    );
};
