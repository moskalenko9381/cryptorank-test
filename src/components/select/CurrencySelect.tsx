import React from "react";
import { ICurrencyData } from "@/type";
import { OptionLabel } from "@/components/OptionLabel";
import { StyledSelect } from "@/components/styled";

interface ISelectProps {
    value: ICurrencyData | undefined;
    options: ICurrencyData[];
    onSelect(option: ICurrencyData): void;
}

export const CurrencySelect = (props: ISelectProps) => {
    const { value, options, onSelect } = props;
    const onSelectOption = (option: any) => {
        onSelect(option as ICurrencyData);
    };
    const onFilter = (option: any, inputValue: string) => {
        const lower = inputValue.toLowerCase();
        return (
            (option.data as ICurrencyData).name.toLowerCase().includes(lower) ||
            (option.data as ICurrencyData).symbol.toLowerCase().includes(lower)
        );
    };

    return (
        <StyledSelect
            windowThreshold={20}
            onChange={onSelectOption}
            classNamePrefix="react-select"
            className="react-windowed-select"
            options={options}
            filterOption={onFilter}
            value={value}
            formatOptionLabel={(option) => (
                <OptionLabel item={option as ICurrencyData} />
            )}
        />
    );
};
