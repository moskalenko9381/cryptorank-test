import {StyledCenteredHeader, StyledLink, StyledMainFlexBox, StyledText} from "@/components/styled";
import React from "react";

export default function Home() {
    return (
        <StyledMainFlexBox>
            <div style={{padding: "4em"}}>
                <StyledCenteredHeader> Hi! My name is Liza. </StyledCenteredHeader>
                <StyledText> I&#39;m interested in the Frontend developer position at CryptoRank.io.</StyledText>
                <StyledText> You can find my test task here. </StyledText>
                <StyledText> Please contact me via <StyledLink href={"https://t.me/limoskk"} > telegram </StyledLink> :) </StyledText>
            </div>
        </StyledMainFlexBox>
    );
}
