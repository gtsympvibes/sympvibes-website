"use client";

import {
    AppShell,
    Burger,
    Group,
    Text,
    Anchor,
    Flex,
    Stack,
    Center,
    Loader,
    ActionIcon,
    Container,
    rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { footerLinks, pages } from "@/utils/constants";
import classes from "./AppWrapper.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavButtonProps {
    href: string;
    title: string;
}

function NavButton({ href, title }: NavButtonProps) {
    const pathname = usePathname();

    return (
        <Anchor underline="never" href={href}>
            <Group className={href === pathname ? classes.activeNavbarButton : classes.navbarButton}>{title}</Group>
        </Anchor>
    );
}

export function AppWrapper({ children }: React.PropsWithChildren) {
    const [opened, { toggle }] = useDisclosure();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <Center className={classes.loader}>
                <Loader color={"blue"} size="xl" type="dots" />
            </Center>
        );
    }

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: "sm",
                collapsed: { desktop: true, mobile: !opened },
            }}
            withBorder={false}
        >
            {/* Header */}
            <AppShell.Header>
                <Group h="100%" px="md" className={classes.header}>
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Group justify="space-between" style={{ flex: 1 }}>
                        <Anchor underline="never" href="/">
                            <Text fw={700} size="xl" c="white" className={classes.titleText}>
                                SV
                            </Text>
                        </Anchor>
                        <Group visibleFrom="sm">
                            {pages.map((page) => (
                                <NavButton key={page.title} href={page.href} title={page.title} />
                            ))}
                        </Group>
                    </Group>
                </Group>
            </AppShell.Header>

            {/* Navbar */}
            <AppShell.Navbar>
                <Flex className={classes.navbar}>
                    <Stack p={"lg"} w={"100%"}>
                        {pages.map((page) => (
                            <NavButton key={page.title} href={page.href} title={page.title} />
                        ))}
                    </Stack>
                </Flex>
            </AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>

            {/* Footer */}
            <div className={classes.footer}>
                <Container className={classes.inner}>
                    <Text size="sm" c="dimmed" ta="center">
                        Sympathetic Vibrations | Made with ♥ by Reetesh Sudhakar
                    </Text>
                    <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
                        {footerLinks.map((item) => (
                            <Anchor href={item.href} underline="never" aria-label={item.title}>
                                <ActionIcon key={item.title} size="xl" color="gray" variant="subtle">
                                    <item.icon style={{ width: rem(25), height: rem(25) }} stroke={1.25} />
                                </ActionIcon>
                            </Anchor>
                        ))}
                    </Group>
                </Container>
            </div>
        </AppShell>
    );
}

export default AppWrapper;
