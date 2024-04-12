import React, { ReactNode, forwardRef, HTMLAttributes } from "react";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";
import { Cross1Icon } from "@radix-ui/react-icons";

interface AccordionTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

interface AccordionItemProps extends Accordion.AccordionItemProps {
  value: string; // Add the value prop here
  children: ReactNode;
  className?: string;
}

export function Faq() {
  return (
    <div className="container mx-auto flex flex-col items-center">
      {/* Use flexbox layout */}
      <AccordionDemo />
    </div>
  );
}

const AccordionDemo: React.FC = () => (
  <Accordion.Root
    className="lg:w-[800px] md:w-[600px] w-[400px] lg:text-xl md:text-lg text-sm "
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <AccordionItem value="item-1">
      <AccordionTrigger>Is Scriptured Prayer free to use?</AccordionTrigger>
      <AccordionContent>
        Yes, Scriptured Prayer is currently available for free to all users.
        However, there may be premium features or subscriptions introduced in
        the future to support ongoing development and maintenance.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>
        Can I customize my prayers on Scriptured Prayer?
      </AccordionTrigger>
      <AccordionContent>
        Yes, users can personalize their prayer experience by selecting specific
        themes, topics, or scriptures they wish to focus on. Additionally, users
        have the flexibility to compose their own prayers based on the provided
        scriptures.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>
        Is Scriptured Prayer available on mobile devices?
      </AccordionTrigger>
      <AccordionContent>
        Currently, Scriptured Prayer is accessible via web browsers on desktop
        and mobile devices. There may be plans for dedicated mobile applications
        in the future.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-4">
      <AccordionTrigger>
        Is there a community aspect to Scriptured Prayer?
      </AccordionTrigger>
      <AccordionContent>
        Scriptured Prayer may include community features in future updates, such
        as discussion forums, prayer groups, or the ability to share
        personalized prayers with others. Stay tuned for further developments.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-5">
      <AccordionTrigger>
        How can I contact support for Scriptured Prayer?
      </AccordionTrigger>
      <AccordionContent>
        For any technical issues, questions, or support inquiries, users can
        reach out to Scriptured Prayer's support team via the contact
        information provided on the app's website or within the app itself.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-6">
      <AccordionTrigger>
        How do I reset my password for Scriptured Prayer?
      </AccordionTrigger>
      <AccordionContent>
        If you've forgotten your password or need to reset it for any reason,
        simply navigate to the login screen of the Scriptured Prayer app and
        select the "Forgot Password" option. Follow the prompts to reset your
        password securely. If you encounter any issues during this process,
        don't hesitate to contact our support team for assistance.
      </AccordionContent>
    </AccordionItem>

    {/* FAQ item 2 */}
    <AccordionItem value="item-7">
      <AccordionTrigger>Can I use Scriptured Prayer offline?</AccordionTrigger>
      <AccordionContent>
        Yes, Scriptured Prayer offers offline functionality for users who may
        not have constant internet access. Once you've downloaded the necessary
        content for offline use, you can engage in prayer sessions, read
        scripture, and access other features without an active internet
        connection. However, please note that certain features, such as syncing
        data across devices, may require an internet connection.
      </AccordionContent>
    </AccordionItem>

    {/* FAQ item 3 */}
    <AccordionItem value="item-8">
      <AccordionTrigger>
        Is my personal data secure with Scriptured Prayer?
      </AccordionTrigger>
      <AccordionContent>
        Absolutely. At Scriptured Prayer, we take the security and privacy of
        our users' data very seriously. We employ robust measures to safeguard
        your personal information, including encryption protocols and strict
        access controls. Rest assured that your data is kept confidential and
        used only in accordance with our privacy policy. If you have any
        concerns about data security or privacy, please reach out to our support
        team for further clarification.
      </AccordionContent>
    </AccordionItem>
  </Accordion.Root>
);

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      {...props}
      ref={forwardedRef}
      className={classNames(
        "mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b",
        className,
      )}
    >
      {children}
    </Accordion.Item>
  ),
);

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={classNames(
          "group flex h-[55px] flex-1 items-center justify-between bg-[#f0f7f0] hover:bg-[#e3eae1] px-5 leading-none shadow-[0_1px_0] outline-none",
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        <span>{children}</span>
        <Cross1Icon
          className=" ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  ),
);

const AccordionContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames(
      "bg-[#f0f7f0] data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden",
      className,
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="py-[15px] px-5">{children}</div>
  </Accordion.Content>
));
