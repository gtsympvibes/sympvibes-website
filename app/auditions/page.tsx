import { Container, Title, Text, Paper, Center, Flex, Card, Stack, Button } from "@mantine/core";
import classes from "./page.module.css";
import { auditionFormLink } from "@/utils/constants";
import { auditionSteps, auditionFAQs } from "@/utils/pageBlurbs";
import AuditionFAQs from "@/app/auditions/AuditionFAQs/AuditionFAQs";
import Link from "next/link";
import { IconListCheck } from "@tabler/icons-react";

function AuditionCard({ title, description }: { title: string; description: string }) {
    return (
        <Card shadow="sm" withBorder style={{ width: "300px", minWidth: "300px" }}>
            <Text c="blue" fw={700}>
                {title}
            </Text>
            <Text c="dimmed">{description}</Text>
        </Card>
    );
}

export default function Page() {
    return (
        <Container size="md" p="xl">
            <Title className={classes.title} ta="center">
                <Text inherit variant="gradient" component="span" gradient={{ from: "blue", to: "gray" }}>
                    Auditions
                </Text>
            </Title>

            {/* Paper for Auditions Dates */}
            <Center pb="xl">
                <Paper withBorder radius="md" shadow="md" bg={"blue"} w="50%" p="sm">
                    <Center>
                        <Text ta="center" size="lg" c="white" fw={700}>
                            Auditions for Spring 2025 will be on January XYZ and ABC, at Skiles 354. More details below!
                        </Text>
                    </Center>
                </Paper>
            </Center>

            {/* Auditions Blurb */}
            <Text ta="center" c="dimmed">
                We encourage you to take part in our upcoming auditions! The auditions process is a{" "}
                <Text c="black" fw={700} span>
                    great
                </Text>{" "}
                way to showcase your talent and meet new people. We look forward to seeing you there! Auditioning for
                the group generally consists of the following steps, outlined below.
            </Text>

            {/* Auditions Process in Cards */}
            <Flex mt="xl" justify="center" gap="lg" direction="row" wrap="wrap">
                {auditionSteps.map((step) => (
                    <AuditionCard key={step.title} title={step.title} description={step.description} />
                ))}
            </Flex>
            
            <br />
            <Center>
                <Link href={auditionFormLink} target="_blank">
                    <Button
                        variant="light"
                        size="lg"
                        leftSection={<IconListCheck size={20} />}
                    >
                        Sign up for Auditions Here!
                    </Button>
                </Link>
            </Center>

            {/* Auditions FAQs */}
            <Stack gap="md">
                <Title order={1} ta="center" mt="xl">
                    <Text inherit variant="gradient" component="span" gradient={{ from: "blue", to: "gray" }}>
                        Frequently Asked Questions
                    </Text>
                </Title>
                <AuditionFAQs auditionFAQs={auditionFAQs} />
            </Stack>

        </Container>
    );
}
