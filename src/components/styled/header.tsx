"use client";
import styled from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
    font-weight: bold;
    color: #8e9aaf;
    text-decoration: none;
    :hover {
        color: #495867;
    }
`;

export const StyledHeader = styled.h1`
    color: #577590;
    padding-left: 2em;
    padding-top: 1em;
    padding-bottom: 1em;
    @media (max-width: 1200px) {
      font-size: 18px;
    }
`;
export const StyledCenteredHeader = styled(StyledHeader)`
    padding-left: 0;
    text-align: center;
`;
