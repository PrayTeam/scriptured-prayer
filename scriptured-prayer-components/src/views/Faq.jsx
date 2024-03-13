import React from "react";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export function Faq() {
  return (
    <div className="bg-snowgrass h-full py-12">
      <div className="container mx-auto flex flex-col items-center">
        {" "}
        {/* Use flexbox layout */}
        <h1 className="text-center text-violet11 text-3xl font-bold mb-8">
          Frequently Asked Questions
        </h1>
        <AccordionDemo />
      </div>
    </div>
  );
}

const AccordionDemo = () => (
  <Accordion.Root
    className="md:w-[800px] md:rounded-md md:shadow-[0 2px 10px] md:shadow-black/5 md:text-[25px]"
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
  </Accordion.Root>
);

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={classNames(
        "focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 ",
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  ),
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={classNames(
          "group flex h-[55px] flex-1 cursor-default items-center justify-between bg-white px-5 leading-none shadow-[0_1px_0] outline-none",
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon
          className=" ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  ),
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames(
        " bg-white data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden ",
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
  ),
);
