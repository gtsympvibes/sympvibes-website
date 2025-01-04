"use client";

interface PDFViewProps {
    filePath: string;
}
export default function PDFView({ filePath }: PDFViewProps) {
    return (
        <>
            <iframe
                src={filePath}
                style={{
                    position: "absolute",
                    top: 60,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    width: "100%",
                    height: "calc(100% - 60px)", // Adjust to account for the top offset
                    border: "none",
                    margin: 0,
                    padding: 0,
                    overflow: "auto",
                    WebkitOverflowScrolling: "touch", // Enable smooth touch scrolling for iOS
                }}
                scrolling="yes" // Ensure scrolling is enabled
            ></iframe>
        </>
    );
}
