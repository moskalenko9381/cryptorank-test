"use client";
import styled from "styled-components";

export const StyledBlueButton = styled.button`
    display: flex;
    flex-wrap: wrap;
    border: none;
    border-radius: 25px;
    width: max-content;
    background-color: cadetblue;
`;

export const StyledImageButton = styled(StyledBlueButton)`
    width: 60px;
    height: 30px;
`;
