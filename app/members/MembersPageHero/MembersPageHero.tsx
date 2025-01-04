import { Container, Text } from "@mantine/core";
import classes from "./MembersPageHero.module.css";

export default function MembersPageHero() {
    return (
        <>
            <Container className={classes.hero} p={0} m={0}>
                <div className={classes.content}>
                    <Text ta="center" c="blue" className={classes.subText}>
                        Meet the Members!
                    </Text>
                </div>
            </Container>
        </>
    );
}
