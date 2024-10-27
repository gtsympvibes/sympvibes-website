import { Container, Title, Text, Center } from "@mantine/core";
import classes from "./HomePageHero.module.css";

export default function HomePageHero() {
    return (
        <Container className={classes.hero} p={0} m={0}>
            <div className={classes.content}>
                <Title className={classes.title} ta="center">
                    Sympathetic{" "}
                    <Text inherit variant="gradient" component="span" gradient={{ from: "blue", to: "gray" }}>
                        Vibrations
                    </Text>
                </Title>
                <Text ta="center" className={classes.subText}>
                    Georgia Tech's{" "}
                    <Text span inherit c="blue" fw={700}>
                        Premier
                    </Text>{" "}
                    All-Male A Cappella Group
                </Text>
            </div>
        </Container>
    );
}
