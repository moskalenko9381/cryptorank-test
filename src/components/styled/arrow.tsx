"use client";
import styled from "styled-components";
export const StyledArrow = styled.i`
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 6px;
    margin-left: 16px;
    margin-top: 6px;
`;

export const StyledArrowLeft = styled(StyledArrow)`
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
`;

export const StyledArrowRight = styled(StyledArrow)`
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
`;
