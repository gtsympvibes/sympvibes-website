import { Container, Title, Text, Center, Paper, Stack } from "@mantine/core";
import { Metadata } from "next";
import classes from "./page.module.css";
import { showcaseEmbedLinks } from "@/utils/showcaseEmbedLinks";
import YouTubeEmbed from "@/components/YouTubeEmbed/YouTubeEmbed";

export const metadata: Metadata = {
    title: "Concerts | Sympathetic Vibrations",
    description:
        "Information about our semesterly concerts at Georgia Tech! Learn more about our upcoming concerts, including dates and locations.",
};

export default function HomePage() {
    return (
        <Container size="md" p="xl">
            <Title className={classes.title} ta="center">
                <Text inherit variant="gradient" component="span" gradient={{ from: "blue", to: "gray" }}>
                    Concerts
                </Text>
            </Title>

            <Center pb="xl">
                <Paper withBorder radius="md" shadow="md" bg={"white"} w="75%" p="sm">
                    <Center>
                        <Text ta="center" size="lg" c="black" fw={400}>
                            Our Spring 2025 concert dates will be announced soon! Stay tuned for more information.
                        </Text>
                    </Center>
                </Paper>
            </Center>

            <Stack align="center" justify="center">
                <Text ta="justify" c="dimmed">
                    Our group performs each semester on the Georgia Tech campus, showcasing our latest songs and
                    arrangements. We look forward to seeing you at our next concert! Some of our past concerts have been
                    held at the{" "}
                    <Text span inherit fw={700} c="black">
                        Scheller College of Business
                    </Text>
                    , the{" "}
                    <Text span inherit fw={700} c="black">
                        John Lewis Student Center
                    </Text>
                    , and the{" "}
                    <Text span inherit fw={700} c="black">
                        East Architecture
                    </Text>{" "}
                    Building.
                </Text>

                <Text ta="justify" c="dimmed">
                    Led by our music director, we perform a variety of songs from different genres. Our concerts
                    typically occur at the end of each semester and are a great way for our busy members to celebrate
                    the end of the semester with our friends and family. We would love to see you there!
                </Text>

                <Text ta="justify" c="dimmed">
                    Some previous songs from our set list include{" "}
                    <Text span inherit c="black">
                        Watermelon Sugar
                    </Text>{" "}
                    by Harry Styles,{" "}
                    <Text span inherit c="black">
                        Misty Mountains
                    </Text>{" "}
                    from The Hobbit, and{" "}
                    <Text span inherit c="black">
                        Cheyenne
                    </Text>{" "}
                    by Jason Derulo. Each song is arranged by one (or more) of our members, and we love to showcase our
                    creativity! Make sure to check out our next concert to hear our latest arrangements.
                </Text>
            </Stack>

            <Stack gap="md">
                <Title order={1} ta="center" mt="xl">
                    <Text inherit span c="gray">
                        Some previous concerts and showcases!
                    </Text>
                </Title>
                {showcaseEmbedLinks.map((link) => (
                    <YouTubeEmbed key={link} embedLink={link} />
                ))}
            </Stack>
        </Container>
    );
}
