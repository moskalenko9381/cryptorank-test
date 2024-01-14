import styles from "@/app/page.module.css";
import { ConverterContainer } from "@/components/converter/ConverterContainer";
import { SWRProvider } from "@/components/util/SWRProvider";
import React from "react";
import { StyledHeader } from "@/components/styled";

export default async function Converter() {
    return (
        <SWRProvider>
            <StyledHeader> Cryptocurrency Converter Calculator </StyledHeader>
            <main className={styles.main}>
                <ConverterContainer />
            </main>
        </SWRProvider>
    );
}
