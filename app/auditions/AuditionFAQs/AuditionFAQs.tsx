"use client";
import { Accordion, Anchor, Text } from "@mantine/core";

interface FAQ {
    question: string;
    answer: string;
}

interface AuditionFAQsProps {
    auditionFAQs: FAQ[];
}

export default function AuditionFAQs({ auditionFAQs }: AuditionFAQsProps) {
    return (
        <Accordion variant="separated" radius="md">
            {auditionFAQs.map((faq) => (
                <Accordion.Item key={faq.question} value={faq.question}>
                    <Accordion.Control>{faq.question}</Accordion.Control>
                    <Accordion.Panel>
                        {faq.answer.startsWith("https") || faq.answer.startsWith("http") ? (
                            <Anchor href={faq.answer} target="_blank" rel="noopener noreferrer">
                                {faq.answer}
                            </Anchor>
                        ) : (
                            <Text>{faq.answer}</Text>
                        )}
                    </Accordion.Panel>
                </Accordion.Item>
            ))}
        </Accordion>
    );
}
