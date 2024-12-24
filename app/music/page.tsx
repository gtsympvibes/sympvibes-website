import { albums } from "@/utils/albums";
import { Flex, Card, Stack, Text, Container, Title } from "@mantine/core";
import { Spotify } from "react-spotify-embed";
import classes from "./page.module.css";
import { musicBlurb } from "@/utils/pageBlurbs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Music | Sympathetic Vibrations",
    description: "Learn more about the music that SympVibes has produced over the years! ",
};

interface Album {
    title: string;
    year: string;
    link: string;
}

function AlbumContent({ title, year, link }: Album) {
    return (
        <Card shadow="sm" withBorder style={{ width: "350px", minWidth: "350px" }}>
            <Stack align="center" gap="xs">
                <Text size="xl" fw={700}>
                    {title}
                </Text>
                <Text c="dimmed">{year}</Text>
                <Spotify link={link} />
            </Stack>
        </Card>
    );
}

export default function Page() {
    return (
        <>
            <Container size="md" p="xl" pb="xs">
                <Title className={classes.title} ta="center">
                    <Text inherit variant="gradient" component="span" gradient={{ from: "blue", to: "gray" }}>
                        Music
                    </Text>
                </Title>

                <Text ta="center">{musicBlurb}</Text>
            </Container>
            <Container p="xl" fluid>
                <Flex direction="row" gap="lg" wrap="wrap" align="center" justify="center">
                    {albums.map((album) => (
                        <AlbumContent key={album.title} {...album} />
                    ))}
                </Flex>
            </Container>
        </>
    );
}
