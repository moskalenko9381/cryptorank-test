import React from "react";
import { LinksContainer, StickyNavbar, StyledLink } from "@/components/styled";

export const Navbar = () => {
    return (
        <StickyNavbar>
            <LinksContainer>
                <StyledLink href="/converter">
                    <p>Converter</p>
                </StyledLink>
                <StyledLink href="/table">
                    <p>Cryptocurrencies table</p>
                </StyledLink>
            </LinksContainer>
        </StickyNavbar>
    );
};
