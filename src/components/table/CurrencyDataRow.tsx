import { ICurrencyData } from "@/type";
import { useCurrencyData } from "@/functions/hooks";
import { OptionLabel } from "@/components/OptionLabel";
import {StyledStickyTd, StyledText, StyledTr} from "@/components/styled";
import React from "react";

export const CurrencyDataRow = ({ item }: { item: ICurrencyData }) => {
    const itemData = useCurrencyData(item);
    return (
        <StyledTr key={item.id}>
            <StyledStickyTd>
                <OptionLabel item={item} />
            </StyledStickyTd>
            <td>
                <p> {item.category || ""} </p>
            </td>
            <td>
                <p> {itemData.price} </p>
            </td>
            <td>
                <p>{itemData.circulatingSupply}</p>
            </td>
            <td>
                <p> {itemData.marketCap}</p>
            </td>
            <td>
                <p>{itemData.historicalPrice24h}</p>
            </td>
            <td>
                <p>{itemData.historicalPrice7d}</p>
            </td>
            <td>
                <p>{itemData.historicalPrice30d}</p>
            </td>
            <td>
                <p>{itemData.historicalPrice3m}</p>
            </td>
            <td>
                <p>{itemData.historicalPrice6m}</p>
            </td>
        </StyledTr>
    );
};
