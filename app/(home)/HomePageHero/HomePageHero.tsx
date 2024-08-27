import { Container, Title, Text, Center, Stack } from "@mantine/core";
import classes from "./HomePageHero.module.css";

export default function HomePageHero() {
    return (
        <Container className={classes.hero} p={0} m={0}>
            <Center>
                <Stack>
                    <Title className={classes.title} ta="center" mt={100} c="white">
                        Sympathetic{" "}
                        <Text inherit variant="gradient" component="span" gradient={{ from: "blue", to: "gray" }}>
                            Vibrations
                        </Text>
                    </Title>
                </Stack>
            </Center>
        </Container>
    );
}
