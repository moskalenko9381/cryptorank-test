import styles from "@/app/page.module.css";
import { StyledHeader } from "@/components/styled";

export default async function NotFound() {
    return (
        <main className={styles.main}>
            <StyledHeader> Sorry, page not found :( </StyledHeader>
        </main>
    );
}
