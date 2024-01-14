import { ConverterContainer } from "@/components/converter/ConverterContainer";
import { SWRProvider } from "@/components/util/SWRProvider";
import React from "react";
import {StyledHeader, StyledMainFlexBox} from "@/components/styled";

export default async function Converter() {
    return (
        <SWRProvider>
            <StyledHeader> Cryptocurrency Converter Calculator </StyledHeader>
            <StyledMainFlexBox>
                <ConverterContainer />
            </StyledMainFlexBox>
        </SWRProvider>
    );
}
