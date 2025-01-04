import { Avatar, Badge, Group, Paper, Text } from "@mantine/core";

interface MemberCardProps {
    name: string;
    voicePart: string;
    perc?: boolean;
    position?: string;
    semJoined: string;
    imagePath: string;
    bio: string;
}

export default function MemberCard({ name, voicePart, perc, position, semJoined, imagePath, bio }: MemberCardProps) {
    return (
        <Paper
            radius="md"
            shadow="sm"
            withBorder
            p="xl"
            bg="var(--mantine-color-body)"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight: "485px",
                maxWidth: "450px",
                width: "100%",
            }}
        >
            <Avatar src={imagePath} size={200} radius={"md"} mx="auto" />
            <Text ta="center" fz="lg" fw={500} mt="md">
                {name}
            </Text>
            <Group p="md" gap="sm" align="center" justify="center">
                {position && (
                    <Badge variant="light" color="blue">
                        {position}
                    </Badge>
                )}
                {perc && (
                    <Badge variant="light" color="red">
                        Perc
                    </Badge>
                )}
                <Badge color="gray">{voicePart}</Badge>
                <Badge color="#000">{semJoined}</Badge>
            </Group>
            <Text ta="justify">{bio}</Text>
        </Paper>
    );
}
