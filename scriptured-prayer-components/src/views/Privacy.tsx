import { useState } from "react";
import DropdownButton from "~/components/DropdownButton";
import PrivacySection from "~/components/PrivacySection";

const Privacy = () => {
  const [visibleSections, updateVisibleSections] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const onClick = (section_id: number) => {
    const updatedSections = [...visibleSections];
    updatedSections[section_id] = !updatedSections[section_id];
    console.log(updatedSections);
    updateVisibleSections(updatedSections);
  };

  return (
    <div className="bg-snowgrass h-fit w-full flex justify-center min-h-full">
      <div className="flex flex-col items-center max-w-full md:max-w-[1200px] md:w-3/4 p-8 ">
        <div className="flex flex-col items-center p-4 max-w-full">
          <h1 className="text-4xl md:text-6xl text-center font-bold uppercase">
            Scriptured Prayer
          </h1>
          <h2 className="text p-4 text-2xl md:text-3xl font-semibold">
            Privacy Policy
          </h2>
        </div>
        <div className="w-4/5 flex justify-center">
          <div className="max-w-full md:w-9/12 flex justify-center p-4">
            <p className="text-lg">
              Prayer is important to us, and so is your privacy. This privacy
              policy explains how Scriptured Prayer uses the personal data we
              collect from you when you use our application.
            </p>
          </div>
        </div>
        <div className="w-full h-px bg-black m-4" /> {/* Horizontal rule */}
        <div className="flex flex-col w-4/5 p-4 overflow-hidden">
          <PrivacySection
            title="What Data Do We Collect?"
            button={
              <DropdownButton
                open={visibleSections[0]}
                onClick={() => onClick(0)}
              />
            }
            visible={visibleSections[0]}
          >
            <div className="max-w-full text-lg my-4">
              <p>Scriptured Prayer collects the following data:</p>
              <ul className="list-disc list-inside">
                <li className="">
                  Personal Identification (Name, username, email address)
                </li>
                <li className="">
                  Personal prayer request information (Name, reason for prayer,
                  whether the prayer was answered)
                </li>
              </ul>
            </div>
          </PrivacySection>
        </div>
        <div className="w-full h-px bg-black m-4" /> {/* Horizontal rule */}
        <div className="flex flex-col w-4/5 p-4 overflow-hidden">
          <PrivacySection
            title="How Do We Collect Your Data?"
            button={
              <DropdownButton
                open={visibleSections[1]}
                onClick={() => onClick(1)}
              />
            }
            visible={visibleSections[1]}
          >
            <div className="max-w-full text-lg my-4">
              <p>
                You directly provide Scriptured Prayer with most of the data we
                collect. We collect and process data when you:
              </p>
              <ul className="list-disc list-inside">
                <li>Register online for a user account</li>
                <li>Use or view our application via your device's cookies</li>
                <li>Input data for a specific prayer request</li>
              </ul>
              <p>
                Scriptured Prayer may also receive data from Google Analytics
              </p>
            </div>
          </PrivacySection>
        </div>
        <div className="w-full h-px bg-black m-4" /> {/* Horizontal rule */}
        <div className="flex flex-col w-4/5 p-4 overflow-hidden">
          <PrivacySection
            title="How Will We Use Your Data?"
            button={
              <DropdownButton
                open={visibleSections[2]}
                onClick={() => onClick(2)}
              />
            }
            visible={visibleSections[2]}
          >
            <div className="max-w-full text-lg my-4">
              <p>Scriptured Prayer will use this data to:</p>
              <ul className="list-disc list-inside">
                <li>Process and track the prayer requests you enter</li>
                <li>Verify your identity as a legitimate user</li>
                <li>
                  Enable you to participate in Scriptured Prayer's user features
                </li>
                <li>
                  Understand how people use and move around our application to
                  make it more intuitive
                </li>
              </ul>
              <p>
                Scriptured Prayer may also receive data from Google Analytics.
              </p>
            </div>
          </PrivacySection>
        </div>
        <div className="w-full h-px bg-black m-4" /> {/* Horizontal rule */}
        <div className="flex w-4/5 p-4">
          <h3 className="text-2xl font-semibold">What Data Do We Collect?</h3>
        </div>
        <div className="w-full h-px bg-black m-4" /> {/* Horizontal rule */}
      </div>
    </div>
  );
};

export default Privacy;
