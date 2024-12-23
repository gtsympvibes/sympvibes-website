import { Button, Center, Container, Text, Title } from "@mantine/core";
import { auditionHomePageText, homePageText } from "@/utils/constants";
import HomePageHero from "@/components/HomePageHero/HomePageHero";
import Link from "next/link";

export default function Page() {
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
                    <Link href="/contact" passHref>
                        <Button variant="light" size="lg">
                            Get in Touch!
                        </Button>
                    </Link>
                </Center>
            </Container>
        </>
    );
}
