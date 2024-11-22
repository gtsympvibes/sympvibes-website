"use client";

import PDFView from "@/components/PDFView/PDFView";
import { useMediaQuery } from "@mantine/hooks";
export default function Page() {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const filePath = isMobile ? "/fall-2024-program-small.pdf" : "/fall-2024-program.pdf";
    return (
        <>
            <PDFView filePath={filePath} />
        </>
    );
}
