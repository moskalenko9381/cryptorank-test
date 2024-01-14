import { ICurrencyData } from "@/type";
import { useCurrencyData } from "@/functions/hooks";
import { OptionLabel } from "@/components/OptionLabel";
import { StyledStickyTd, StyledTr } from "@/components/styled";

export const CurrencyDataRow = ({ item }: { item: ICurrencyData }) => {
    const itemData = useCurrencyData(item);
    return (
        <StyledTr key={item.id}>
            <StyledStickyTd>
                {" "}
                <OptionLabel item={item} />{" "}
            </StyledStickyTd>
            <td> {item.category || ""}</td>
            <td> {itemData.price} </td>
            <td> {itemData.circulatingSupply}</td>
            <td> {itemData.marketCap}</td>
            <td> {itemData.historicalPrice24h}</td>
            <td> {itemData.historicalPrice7d}</td>
            <td> {itemData.historicalPrice30d}</td>
            <td> {itemData.historicalPrice3m}</td>
            <td> {itemData.historicalPrice6m}</td>
        </StyledTr>
    );
};
