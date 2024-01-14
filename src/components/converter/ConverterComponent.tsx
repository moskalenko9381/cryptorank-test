import React, { useCallback, useEffect, useState } from "react";
import { ICurrencyData } from "@/type";
import {convertCurrency, findConversionRate} from "@/functions";
import { CurrencyInputContainer } from "@/components/CurrencyInputContainer";
import { CurrencySelect } from "@/components/select/CurrencySelect";
import SwapIcon from "../../icons/swap.svg";
import Image from "next/image";
import { FlexBoxRow, StyledBlueButton } from "@/components/styled";
import { getPrettyValueOfNumber } from "@/functions/pretty";

function getCurrencyBySymbol(
    data: ICurrencyData[] | undefined,
    symbol: string,
) {
    const filtered = data?.filter((item) => item.symbol === symbol);
    return filtered && filtered.length ? filtered[0] : undefined;
}

export const ConverterComponent = ({ data }: { data: ICurrencyData[] }) => {
    const [currencyValue, setCurrencyValue] = useState(0);
    const [convertedValue, setConvertedValue] = useState<string | undefined>();
    const [firstCurrency, setFirstCurrency] = useState<
        ICurrencyData | undefined
    >(() => getCurrencyBySymbol(data, "BTC"));
    const [secondCurrency, setSecondCurrency] = useState<
        ICurrencyData | undefined
    >(() => getCurrencyBySymbol(data, "ETH"));
    const [rate, setRate] = useState<string>();

    useEffect(() => {
        if (firstCurrency && secondCurrency) {
            const currencyRate = findConversionRate(
                firstCurrency.values.USD.price,
                secondCurrency.values.USD.price,
            );
            setRate(getPrettyValueOfNumber(currencyRate));
        }
    }, [firstCurrency, secondCurrency]);
    const onConvert = (
        value: number,
        firstCur: ICurrencyData,
        secondCur: ICurrencyData,
    ) => {
        console.log("Convert value:", value);
        if (firstCur && secondCur) {
            const converted = convertCurrency(value, firstCur, secondCur);
            console.log("Converted:", converted);
            //  const convertedPrettyValue = getPrettyValueOfNumber(Number(converted?.converted));
            converted?.converted && setConvertedValue(String(converted?.converted));
        }
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (secondCurrency && firstCurrency) {
                console.log("CurrencyValue:", currencyValue);
                onConvert(currencyValue, firstCurrency, secondCurrency);
            }
        }, 500);
        return () => clearTimeout(timeoutId);
    }, [currencyValue, firstCurrency, secondCurrency]);

    const onInput = (newValue: string) => {
        console.log("Input newValue:", newValue);
        const value = parseFloat(newValue);
        console.log("Event:", newValue, value);
        setCurrencyValue(value);
    };

    const onChangeFirstCurrency = (newValue: ICurrencyData) => {
        setFirstCurrency(newValue);
    };

    const onChangeSecondCurrency = (newValue: ICurrencyData) => {
        setSecondCurrency(newValue);
    };

    const onSwitch = useCallback(() => {
        const temp = firstCurrency;
        setFirstCurrency(secondCurrency);
        setSecondCurrency(temp);
    }, [firstCurrency, secondCurrency]);

    return (
        <FlexBoxRow>
            <CurrencyInputContainer
                currencyValue={String(currencyValue)}
                onChangeInput={onInput}
                text={firstCurrency && secondCurrency && rate ?
                    `1 ${firstCurrency?.symbol} = ${rate} ${secondCurrency?.symbol}` : ""}
            >
                <CurrencySelect
                    value={firstCurrency}
                    options={data}
                    onSelect={onChangeFirstCurrency}
                />
            </CurrencyInputContainer>
            <StyledBlueButton onClick={onSwitch}>
                <Image
                    alt={"Swap"}
                    src={SwapIcon}
                    width={48}
                    height={48}
                    loading={"lazy"}
                />
            </StyledBlueButton>
            <CurrencyInputContainer
                currencyValue={convertedValue}
                readonly={true}
            >
                <CurrencySelect
                    value={secondCurrency}
                    options={data}
                    onSelect={onChangeSecondCurrency}
                />
            </CurrencyInputContainer>
        </FlexBoxRow>
    );
};
