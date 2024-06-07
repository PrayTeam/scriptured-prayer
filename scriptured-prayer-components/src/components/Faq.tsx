import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

// todo: retrieve this data from an endpoint when available
const faqItems: FaqItem[] = [
  {
    question: "Is Scriptured Prayer free to use?",
    answer:
      "Yes, Scriptured Prayer is currently available for free to all users. However, there may be premium features or subscriptions introduced in the future to support ongoing development and maintenance.",
  },
  {
    question: "Can I customize my prayers on Scriptured Prayer?",
    answer:
      "Yes, users can personalize their prayer experience by selecting specific themes, topics, or scriptures they wish to focus on. Additionally, users have the flexibility to compose their own prayers based on the provided scriptures.",
  },
  {
    question: "Is Scriptured Prayer available on mobile devices?",
    answer:
      "Scriptured Prayer is accessible via web browsers on desktop and mobile devices. While a native mobile application could be developed at a later date, our current focus is making sure our web application offers the quality our users deserve.",
  },
  {
    question: "How can I get involved in the Scriptured Prayer community?",
    answer:
      "Our Scriptured Prayer team is busy planning the features that will bolster healthy community interactions. These may include discussion forums, prayer groups, or the ability to share personalized prayers with others. Stay tuned for further developments.",
  },
  {
    question: "How can I contact support for Scriptured Prayer?",
    answer:
      "For any technical issues, questions, or support inquiries, users can reach out to Scriptured Prayer's support team via the contact information provided within the app.",
  },
  {
    question: "How do I reset my password for Scriptured Prayer?",
    answer:
      'If you\'ve forgotten your password or need to reset it for any reason, simply navigate to the login screen of the Scriptured Prayer app, select the "Forgot Password" option and follow the prompts to reset your password securely. If you encounter any issues during this process, contact our support team for assistance.',
  },
  {
    question: "Can I use Scriptured Prayer offline?",
    answer:
      "Yes, Scriptured Prayer offers offline functionality for users who may not have constant internet access. Once you've downloaded the necessary content for offline use, you can engage in prayer sessions, read scripture, and access other eligible features without an active internet connection. However, please note that certain features may require you to reconnect your device to the internet.",
  },
  {
    question: "Is my personal data secure with Scriptured Prayer?",
    answer:
      "Absolutely. At Scriptured Prayer, we take the security and privacy of our users' data very seriously. We employ robust measures to safeguard your personal information, including encryption protocols and strict access requirements. Rest assured that your data is kept confidential and used only in accordance with our privacy policy. If you have any concerns about data security or privacy, please reach out to our support team for further clarification.",
  },
];

interface AccordionItemHeaderProps {
  question: string;
  open: boolean;
}

function AccordionItemHeader(props: AccordionItemHeaderProps) {
  const [open, setOpen] = useState(props.open ?? false);

  return (
    <AccordionTrigger
      className="bg-snowgrass hover:bg-lichen w-full flex items-center p-4 text-left"
      onClick={() => setOpen(!open)}
    >
      <div className="grow font-semibold text-lg">{props.question}</div>
      <PlusIcon
        className={`${open ? "rotate-45" : ""} transition-transform ease-in-out`}
        aria-hidden
      />
    </AccordionTrigger>
  );
}

export function Faq() {
  return (
    <Accordion
      className="w-full mx-auto md:w-[600px] lg:w-[800px] rounded overflow-hidden"
      type="single"
      defaultValue="item-0"
      collapsible
    >
      {faqItems.map((f, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className="border-b border-b-stone"
        >
          <AccordionItemHeader question={f.question} open={i === 0} />
          <AccordionContent className="bg-white p-4 text-lg">
            {f.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
