import { Title, Text } from "@mantine/core";
import classes from "./Welcome.module.css";

export function Welcome({ pageTitle }: { pageTitle: string }) {
    return (
        <>
            <Title className={classes.title} ta="center" mt={100}>
                Ruh{" "}
                <Text inherit variant="gradient" component="span" gradient={{ from: "blue", to: "gray" }}>
                    Roh
                </Text>
            </Title>
            <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                The{" "}
                <Text span c="black" fw={500}>
                    {pageTitle}
                </Text>{" "}
                page is currently under development. Check back soon for updates!
            </Text>
        </>
    );
}
