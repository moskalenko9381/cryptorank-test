import {StyledHeader, StyledMainFlexBox} from "@/components/styled";

export default async function NotFound() {
    return (
        <StyledMainFlexBox>
            <StyledHeader> Sorry, page not found :( </StyledHeader>
        </StyledMainFlexBox>
    );
}
