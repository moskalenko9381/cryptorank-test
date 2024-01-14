import React, { useCallback, useEffect, useState } from "react";
import { ICurrencyData } from "@/type";
import {convertCurrency, findConversionRate} from "@/functions";
import { CurrencyInputContainer } from "@/components/converter/CurrencyInputContainer";
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
    const [currencyValue, setCurrencyValue] = useState<string | undefined>();
    const [convertedValue, setConvertedValue] = useState<string | undefined>();
    const [firstCurrency, setFirstCurrency] = useState<
        ICurrencyData | undefined
    >(() => getCurrencyBySymbol(data, "BTC"));
    const [secondCurrency, setSecondCurrency] = useState<
        ICurrencyData | undefined
    >(() => getCurrencyBySymbol(data, "ETH"));
    const [rateFromFirstToSecond, setRateFromFirstToSecond] = useState<string>();
    const [rateFromSecondToFirst, setRateFromSecondToFirst] = useState<string>();

    useEffect(() => {
        if (firstCurrency && secondCurrency) {
            const currencyRate = findConversionRate(
                firstCurrency.values.USD.price,
                secondCurrency.values.USD.price,
            );
            const currencyRateSecond = findConversionRate(
                secondCurrency.values.USD.price,
                firstCurrency.values.USD.price
            );
            setRateFromFirstToSecond(getPrettyValueOfNumber(currencyRate));
            setRateFromSecondToFirst(getPrettyValueOfNumber(currencyRateSecond));
        }
    }, [firstCurrency, secondCurrency]);
    const onConvert = (
        value: number,
        firstCur: ICurrencyData,
        secondCur: ICurrencyData,
    ) => {
        if (firstCur && secondCur) {
            const convertedResult = convertCurrency(value, firstCur, secondCur);
            convertedResult && setConvertedValue(String(convertedResult.converted));
        }
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (secondCurrency && firstCurrency) {
                onConvert(currencyValue ? Number(currencyValue) : 0, firstCurrency, secondCurrency);
            }
        }, 500);
        return () => clearTimeout(timeoutId);
    }, [currencyValue, firstCurrency, secondCurrency]);

    const onInput = (newValue: string) => {
        setCurrencyValue(newValue);
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
                currencyValue={currencyValue ? String(currencyValue) : ""}
                onChangeInput={onInput}
                text={firstCurrency && secondCurrency && rateFromFirstToSecond ?
                    `1 ${firstCurrency?.symbol} = ${rateFromFirstToSecond} ${secondCurrency?.symbol}` : ""}
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
                text={firstCurrency && secondCurrency && rateFromSecondToFirst ?
                    `1 ${secondCurrency?.symbol} = ${rateFromSecondToFirst} ${firstCurrency?.symbol}` : ""}
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
