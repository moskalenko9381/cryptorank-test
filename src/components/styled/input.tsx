"use client";
import styled from "styled-components";
export const StyledInput = styled.input`
    border: none;
    //border-bottom: 1px solid #8e9aaf;
    background: none;
    line-height: 4em;
    font-size: 20px;
    padding-left: 1em;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    -moz-appearance: textfield;

    &:focus {
        outline: none;
        box-shadow: none;
    }
`;
