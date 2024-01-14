import React, { useCallback, useEffect, useMemo, useState } from "react";
import bigDecimal from "js-big-decimal";
import { StyledInput, StyledInputContainer } from "@/components/styled";
import { getPrettyValueOfNumber } from "@/functions/pretty";

interface IProps {
    readonly?: boolean;
    currencyValue?: string;
    onChangeInput?: (value: string) => void;
    children: React.ReactNode;
    text?: string;
}

export const CurrencyInputContainer = (props: IProps) => {
    const { readonly, text, currencyValue, onChangeInput, children } = props;

    const [numericValue, setNumericValue] = useState<string | undefined>();
    useEffect(() => {
        setNumericValue(currencyValue || "");
    }, [currencyValue]);

    const onChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const withoutSeparator = event.target.value.replace(/,/g, "");
            if (withoutSeparator !== numericValue) {
                setNumericValue(withoutSeparator);
                onChangeInput && onChangeInput(withoutSeparator);
            }
        },
        [onChangeInput, numericValue],
    );

    const onKeyDown = useCallback(
        (event: React.KeyboardEvent) => {
            console.log(event.code, numericValue);
            if (event.code === "Period") {
                if (!numericValue || numericValue.indexOf(".") > 0) {
                    event.preventDefault();
                    return;
                }
            }
            if (
                event.code !== "Backspace" &&
                event.code !== "Period" &&
                event.code !== "ArrowLeft" &&
                event.code !== "ArrowRight" &&
                event.code.indexOf("Digit") < 0
            ) {
                event.preventDefault();
            }
        },
        [numericValue],
    );

    const prettyValue = useMemo(() => {
        if (!numericValue) {
            return "";
        }
        if (numericValue[numericValue.length - 1] !== ".") {
            return readonly
                ? getPrettyValueOfNumber(Number(numericValue))
                : bigDecimal.getPrettyValue(numericValue);
        }
        return numericValue;
    }, [numericValue, readonly]);

    return (
        <StyledInputContainer>
            <div
                style={{ width: "100%", display: "flex", flexDirection: "row" }}
            >
                <StyledInput
                    placeholder={"0"}
                    value={prettyValue}
                    readOnly={readonly}
                    onKeyDown={onKeyDown}
                    onChange={onChange}
                />
                {text && <span> {text} </span>}
            </div>
            {children}
        </StyledInputContainer>
    );
};
