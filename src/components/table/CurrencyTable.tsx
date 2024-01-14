"use client";
import { ICurrencyData } from "@/type";
import { CurrencyDataRow } from "@/components/table/CurrencyDataRow";
import {FlexBoxRow, ScrollableDiv, StyledTable, StyledText} from "@/components/styled";

export const CurrencyTable = ({ data }: { data: ICurrencyData[] }) => {
    return (
        <ScrollableDiv>
            {data.length ?
                <StyledTable>
                    <thead>
                        <tr>
                            <td> Name</td>
                            <td> Category</td>
                            <td> Price USD</td>
                            <td> Circulating Supply</td>
                            <td> Market Cap</td>
                            <td>Historical Price 24h</td>
                            <td>Historical Price 7d</td>
                            <td>Historical Price 30d</td>
                            <td>Historical Price 3m</td>
                            <td>Historical Price 6m</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <CurrencyDataRow key={item.id} item={item} />
                        ))}
                    </tbody>
                </StyledTable>
                :
                <FlexBoxRow>
                    <StyledText> <p> Sorry, no data provided :(</p></StyledText>
                </FlexBoxRow>
            }
        </ScrollableDiv>
    );
};
