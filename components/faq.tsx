"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    { question: "What is Universe Chain?", answer: "Universe Chain is a next-generation blockchain platform focused on scalability and user experience." },
    { question: "What problem does Universe Chain solve?", answer: "Universe Chain addresses the challenges of scalability, security, and accessibility in blockchain technology." },
    { question: "What is the consensus algorithm for Universe?", answer: "Universe uses a unique consensus mechanism that combines proof-of-stake with AI-driven validation." },
    { question: "What is the difference between SUCC and FUD?", answer: "SUCC is our native utility token, while FUD represents governance rights in the Universe ecosystem." },
    { question: "Where to buy SUCC token?", answer: "SUCC tokens are available on major decentralized exchanges and our official platform." },
    { question: "Can I send my SUCC tokens to my ETH wallet like Metamask?", answer: "Yes, SUCC tokens are ERC-20 compatible and can be stored in any Ethereum wallet." },
    { question: "Where can I see the transaction fee (GAS)?", answer: "Transaction fees are displayed before confirming any transaction on the Universe platform." },
    { question: "Does Universe have a distributed supply?", answer: "Yes, Universe has a carefully planned token distribution to ensure long-term sustainability." },
    { question: "When can I transfer the presale to my wallet?", answer: "Presale tokens are transferred automatically after the presale period ends." },
    { question: "What is the burn mechanism for UCC?", answer: "UCC implements a systematic burn mechanism to maintain token value and scarcity." },
    { question: "Where to check the token info supply of UCC?", answer: "Token supply information is available on our official explorer and major tracking platforms." }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          FREQUENTLY ASKED<br />QUESTIONS
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}