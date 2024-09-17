import { Container } from "~/components";

export function Privacy() {
  return (
    <Container className="flex flex-col">
      <h1 className="text-2xl text-black font-black my-4">Privacy Policy</h1>
      <p>
        Prayer is important to us, and so is your privacy. This privacy policy
        explains how Scriptured Prayer uses the personal data we collect from
        you when you use our application.
      </p>
      <h2 className="text-xl uppercase text-black font-semibold my-4">
        What Data Do We Collect?
      </h2>
      <p>
        Scriptured Prayer collects the following data:
        <ul className="list-disc pl-5 my-2">
          <li>
            Personal identification information (Name, username, email address)
          </li>
          <li>
            Personal prayer request information (Name, reason for prayer,
            whether the prayer was answered)
          </li>
        </ul>
      </p>
      <h2 className="text-xl uppercase text-black font-semibold my-4">
        How Do We Collect Your Data?
      </h2>
      <p>
        You directly provide Scriptured Prayer with most of the data we collect.
        We collect and process data when you:
        <ul className="list-disc pl-5 my-2">
          <li>Register online for a user account</li>
          <li>Use or view our application via your device's cookies</li>
          <li>Input data for a specific prayer request</li>
        </ul>
        {/* Scriptured Prayer may also receive usage data from Google Analytics. */}
      </p>
      <h2 className="text-xl uppercase text-black font-semibold my-4">
        How Will We Use Your Data?
      </h2>
      <p>
        Scriptured Prayer will use this data to:
        <ul className="list-disc pl-5 my-2">
          <li>Process and track the prayer requests you enter</li>
          <li>Verify your identity as a legitimate user</li>
          <li>
            Enable you to participate in Scriptured Prayer's user features
          </li>
          <li>
            Understand how people use and move around our application to make it
            more intuitive
          </li>
        </ul>
      </p>
      <h2 className="text-xl uppercase text-black font-semibold my-4">
        How We Share Your Information
      </h2>
      <p>
        We share non-personal information with third parties. We share your
        device identifiers with providers of data analytics, hosting services,
        business communication, and collaboration tools, data storage services,
        product engineering and design tools, and infrastructure tools.
      </p>
      <h2 className="text-xl uppercase text-black font-semibold my-4">
        How Long Will We Store Your Data?
      </h2>
      <p>
        We will retain your information for as long as we are required to
        provide the Service to you, as required to fulfill our legal
        requirements and defend legal claims. After you have terminated your use
        of our services, we store your information in an aggregated and
        anonymized format.
      </p>
      <h2 className="text-xl uppercase text-black font-semibold my-4">
        What Are Your Data Protection Rights?
      </h2>
      <p>
        Scriptured Prayer wants to make you fully aware of all of your data
        protection rights. Every user is entitled to the following:
        <ul className="list-disc pl-5 my-2">
          <li>
            The right to access: You have the right to ask us to access the
            personal data we hold about you and be provided with certain
            information about how we use your personal data and who we share it
            with.
          </li>
          <li>
            The right to rectify: You also have the right to ask us to correct
            your data where it is inaccurate or incomplete.
          </li>
          <li>
            The right to portability: You have the right to ask us that a copy
            of your personal data be transferred to another organization or to
            you, under certain conditions.
          </li>
          <li>
            The right to deletion: Under certain conditions, you have the right
            to request that we erase your data.
          </li>
          <li>
            The right to restriction: You have the right to request that we
            restrict the processing of your personal data, under certain
            conditions.
          </li>
        </ul>
        {/* To exercise any of the rights above, please contact us at: [insert email]. */}
      </p>
      {/* <h2 className="text-xl uppercase text-black font-semibold my-4">
				Data Security
			</h2>
			<p>
				In the event of a data breach, Scriptured Prayer will…
			</p> */}
      <h2 className="text-xl uppercase text-black font-semibold my-4">
        What Are Cookies?{/* they are delicious */}
      </h2>
      <p>
        Http cookies, also known as web cookies, browser cookies, or simply
        "cookies", are text files placed in your browser when you visit a
        website or application. These files collect standard information and
        visitor behavior. When you visit our application, we may automatically
        store such information on your device.
      </p>
      <h2 className="text-xl uppercase text-black font-semibold my-4">
        How We Use Cookies
      </h2>
      <p>
        Scriptured Prayer uses cookies in a range of ways to improve your
        experience on our application, including:
        <ul className="list-disc pl-5 my-2">
          <li>Keeping you signed in</li>
          <li>Understanding how you use our application</li>
          <li>Allowing you to access private prayer requests</li>
        </ul>
      </p>
      <h2 className="text-xl uppercase text-black font-semibold my-4">
        What Types of Cookies Do We Use?
      </h2>
      <p>
        We use first-party {/*and third-party (Google Analytics) */}
        tracking technologies to perform the following functions:
        <ul className="list-disc pl-5 my-2">
          <li>
            Essential Tracking Technologies which are beneficial to
            understanding our platform and user base. Tracking data collection
            is anonymous.
          </li>
          <li>
            Functionality Tracking Technologies, which allow us to remember
            choices you make and provide personalized features when you are
            logged in.
          </li>
          <li>
            Performance Tracking Technologies, which enable us to collect
            information about your activity on our application, including
            behavioral data and content engagement. These cookies allow us to
            provide you with a better user experience.
          </li>
        </ul>
      </p>
      <h2 className="text-xl uppercase text-black font-semibold my-4">
        Managing Cookies
      </h2>
      <p>
        Some cookies are necessary for delivering our application to visitors,
        but others can be turned off. You have the right to choose whether or
        not to accept these optional cookies. If you would like to opt-in or
        opt-out of using cookies, you should be able to do so using your
        browser. You can review your cookie settings at any time.
      </p>
      <h2 className="text-xl uppercase text-black font-semibold my-4">
        Changes to Our Privacy Policy
      </h2>
      <p>
        We reserve the right to update this policy at any time. If we make any
        changes to the way we handle your data, we will amend this page to
        reflect those changes. The privacy policy was last updated on February
        1, 2024.
      </p>
      <h2 className="text-xl uppercase text-black font-semibold my-4">
        How to Contact Us
      </h2>
      <p>
        If you have questions about our privacy policy or the data we hold, or
        if you would like to exercise one of your data protection rights, please
        do not hesitate to contact us.{/* Email us at: [insert email]*/}
      </p>
    </Container>
  );
}
