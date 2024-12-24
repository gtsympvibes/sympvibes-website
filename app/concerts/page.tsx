import { Welcome } from "@/components/Welcome/Welcome";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Concerts | Sympathetic Vibrations",
    description:
        "Information about our semesterly concerts at Georgia Tech! Learn more about our upcoming concerts, including dates and locations.",
};

export default function HomePage() {
    return (
        <>
            <Welcome pageTitle="Concerts" />
        </>
    );
}
