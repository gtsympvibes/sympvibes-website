"use client";
import { Button, Center, Container, Text, Title } from "@mantine/core";
import { auditionHomePageText, homePageText } from "@/utils/constants";
import HomePageHero from "@/components/HomePageHero/HomePageHero";

export default function HomePage() {
    return (
        <>
            <HomePageHero />
            <Container size="md" pt="xl">
                <Title order={1} ta="center" c="blue">
                    About Us!
                </Title>
                <br />
                <Text ta="justify" size="lg" p="sm">
                    {homePageText}
                </Text>
                <br />
                <Title order={1} ta="center" c="blue">
                    Join the Group!
                </Title>
                <br />
                {auditionHomePageText.map((text, index) => (
                    <Text key={index} ta="justify" size="lg" p="sm">
                        {text}
                    </Text>
                ))}
                <br />
                <Center>
                    <Button
                        variant="light"
                        size="lg"
                        onClick={() => {
                            window.location.href = "/contact";
                        }}
                    >
                        Get in Touch!
                    </Button>
                </Center>
            </Container>
        </>
    );
}
