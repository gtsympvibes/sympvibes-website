import MemberCard from "@/app/members/MemberCard/MemberCard";
import MembersPageHero from "@/app/members/MembersPageHero/MembersPageHero";
import { members } from "@/utils/members";
import { alumni } from "@/utils/alumni";
import { Container, Group, Stack, Text, Title } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Members | Sympathetic Vibrations",
    description: "Meet the members and alumni of SympVibes!",
};

export default function Page() {
    return (
        <>
            <MembersPageHero />
            <Container size="xl" p="sm" pt="xl">
                <Group justify="center" align="center">
                    {members.map((member) => (
                        <MemberCard key={member.name} {...member} />
                    ))}
                </Group>
            </Container>
            <Container size="xl" pt="xl">
                <Title order={1} ta="center" c="blue">
                    Alumni
                </Title>
                <Stack justify="center" align="center">
                    {alumni.map((item) => (
                        <Stack p="xs" key={item.year}>
                            <Text ta="center" fw={700} size="xl">
                                {item.year}
                            </Text>
                            <Text ta="center">{item.names}</Text>
                        </Stack>
                    ))}
                </Stack>
            </Container>
        </>
    );
}
