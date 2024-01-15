"use client";
import styled from "styled-components";

export const StyledStickyTd = styled.td`
    padding-left: 1em;
    padding-right: 1em;
    background: #e8f1f2;
    text-align: start;
    position: sticky;
    left: -1%;
    z-index: 1;
    font-weight: 600;
    min-width: auto;
    white-space: normal;
`;

export const StyledTr = styled.tr`
  min-width: auto;
  td {
    //width: 1%;
    &:not(${StyledStickyTd}){
      white-space: nowrap;
    }
    line-height: 2em;
    padding: 0.5em;
  }

  &:hover {
    background: #e3f2fd;

    td:first-of-type {
      background: #e3f2fd;
    }
  }

  &:last-of-type {
    td:first-of-type {
      border-radius: 0 0 0 25px;
    }

    td:last-of-type {
      border-radius: 0 0 25px 0;
    }
`;

export const StyledTable = styled.table`
    color: #495867;
    background: white;
    text-align: start;
    font-size: 20px;
    width: 100%;
    @media (max-width: 1200px) {
      font-size: 16px;
    }
    border-collapse: collapse;
    
    thead tr {
      position: sticky;
      z-index: 5;
    }

    thead td {
        position: sticky; /* make the table heads sticky */
       // top: 0;
        z-index: 3;
        padding-left: 1em;
        line-height: 2em;
        &:first-of-type {
            z-index: 4;
            border-radius: 25px 0 0 0;
            left: -1%;
        }

        &:last-of-type {
            border-radius: 0 25px 0 0;
        }

        background: #bbdefb;
    }
`;
