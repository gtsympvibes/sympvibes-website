import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../theme";
import AppWrapper from "@/components/AppWrapper/AppWrapper";
import { Notifications } from "@mantine/notifications";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sympathetic Vibrations",
    description: "The official website of SympVibes, the premier all-male a cappella group at Georgia Tech!",
};

export default function RootLayout({ children }: { children: any }) {
    return (
        <html lang="en">
            <head>
                <ColorSchemeScript forceColorScheme="light" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                />
            </head>
            <body>
                <MantineProvider theme={theme} forceColorScheme="light">
                    <Notifications />
                    <AppWrapper>{children}</AppWrapper>
                </MantineProvider>
            </body>
        </html>
    );
}
