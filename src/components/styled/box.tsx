"use client";
import styled from "styled-components";

export const StyledOptionLabel = styled.div`
    display: flex;
    flex-wrap: wrap;
    line-height: 0;
`;
export const StyledRow = styled.div`
    padding-top: 6em;
    display: flex;
    justify-items: center;
    align-items: center;
    text-align: center;
    gap: 2em;
    flex-direction: row;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
`;

export const StickyNavbar = styled.div`
    display: flex;
    width: 100%;
    height: 4em;
    flex-direction: row;
    background: #eaf4f4;
    align-items: center;
    z-index: 2;
`;

export const LinksContainer = styled.div`
    margin-left: 4.1em;
    flex-direction: row;
    display: flex;
    gap: 2em;
    max-width: 80%;
`;

export const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    border-radius: 25px;
    @media (max-width: 1200px) {
        width: 100%;
    }
    background: #e8f1f2;

    &:hover {
        border: 2px solid #577590;
    }
`;

export const StyledInputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #8e9aaf;
    align-items: center;
    justify-content: space-between;
`;

export const FlexBoxRow = styled.div`
    display: flex;
    padding: 1em;
    background: #fcfff7;
    box-shadow: 2px 2px #fcfff7;
    //height: 80%;
    width: 90%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    @media (max-width: 1200px) {
        flex-direction: column;
    }
    gap: 2em;
    flex-wrap: wrap;
    flex-grow: 1;
`;

export const ScrollableDiv = styled.div`
    position: relative;
    top: 0;
    display: flex;
    width: 100%;
    background: #fcfff7;
    box-shadow: 2px 2px #fcfff7;
    padding-left: 2em;
    padding-right: 2em;
    padding-bottom: 2em;
`;

export const StyledMainBlock = styled.div`
    height: 100%;
    font-size: 20px;
    color: #577590;
`;

export const StyledMainFlexBox = styled(StyledMainBlock)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;