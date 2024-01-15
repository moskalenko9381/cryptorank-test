import { ICurrencyData } from "@/type";
import React from "react";
import {StyledOptionLabel, StyledOptionLabelWithMargin, StyledText} from "@/components/styled";

export const OptionLabel = ({
    item,
    margin,
}: {
    item: ICurrencyData;
    margin?: boolean;
}) => {
    const children = (
        <>
            <StyledText> {item.label} &nbsp; </StyledText>
            <p style={{ opacity: "0.5" }}>{item.symbol} </p>
        </>
    );
    if (margin) {
        return (
            <StyledOptionLabelWithMargin> {children} </StyledOptionLabelWithMargin>
        );
    }
    return <StyledOptionLabel> {children} </StyledOptionLabel>;
};
