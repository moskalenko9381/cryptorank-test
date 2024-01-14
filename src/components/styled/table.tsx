"use client";
import styled from "styled-components";

export const StyledStickyTd = styled.td`
    padding-left: 1em;
    padding-right: 1em;
    background: #e8f1f2;
    text-align: start;
    position: sticky;
    left: 0;
    z-index: 1;
    font-weight: 600;
`;

export const StyledTr = styled.tr`
  width: 5em;
  td {
    width: 1%;
    white-space: nowrap;
    line-height: 3em;
    padding: 1em;
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
    width: 95%;
    font-size: 20px;
    border-collapse: collapse;

    thead td {
        position: sticky; /* make the table heads sticky */
        top: 0;
        z-index: 3;
        padding-left: 1em;
        line-height: 2em;
        &:first-of-type {
            z-index: 4;
            border-radius: 25px 0 0 0;
            left: 0;
        }

        &:last-of-type {
            border-radius: 0 25px 0 0;
        }

        background: #bbdefb;
    }
`;
