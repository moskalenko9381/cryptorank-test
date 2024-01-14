"use client";
import styled from "styled-components";
import WindowedSelect from "react-windowed-select";

export const StyledSelect = styled(WindowedSelect)`
    .react-select__control--is-focused {
        box-shadow: none;
    }

    .react-select__control {
        width: 100%;
        height: 4em;
        background: none;
        border: none;
        border-radius: 0;
        cursor: pointer;
        &:focus {
            outline: none;
        }
    }

    .react-select__clear-indicator {
        visibility: hidden;
    }

    .react-select__option {
        border-radius: 25px;
        padding-left: 2em;
    }

    .react-select__option--is-focused {
        background: #e8f1f2;
    }

    .react-select__option--is-selected {
        background: cadetblue;
    }

    .react-select__value-container {
        padding-left: 0.8em;
    }

    .react-select__menu {
        .react-select__menu-list {
            height: 500px;
        }
    }
`;
