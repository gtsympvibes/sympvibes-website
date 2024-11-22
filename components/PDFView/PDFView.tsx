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
                    border: "none",
                    margin: 0,
                    padding: 0,
                    overflow: "hidden",
                    height: "100%",
                }}
            ></iframe>
        </>
    );
}
