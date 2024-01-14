import { ICurrencyData } from "@/type";
import React from "react";
import { StyledOptionLabel, StyledText } from "@/components/styled";

export const OptionLabel = ({ item }: { item: ICurrencyData }) => {
    return (
        <StyledOptionLabel>
            <StyledText> {item.label} &nbsp; </StyledText>
            <p style={{ opacity: "0.5" }}>{item.symbol} </p>
        </StyledOptionLabel>
    );
};
