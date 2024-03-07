import { useNavigate } from "react-router-dom";
import { Button } from "~/components/form";
import { theme } from "~/tailwind.config";

interface footProps {
  color: keyof typeof theme.colors;
  text?: keyof typeof theme.colors;
}

export function Footer({ color, text }: footProps) {
  const navigate = useNavigate();

  return (
    <footer
      className="p-6 dark:bg-gray-800 dark:text-gray-100 text-white"
      style={{ backgroundColor: theme.colors[color], color: text }}
    >
      <div className="flex items-center justify-center">
        _________________________
      </div>
      <div className="p-3 container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
        <div className="flex flex-col space-y-4 items-center ">
          <h1 className="text-2xl font-bold">Scriptured Prayer</h1>
          <h2 className="font-medium">Logo placeholder</h2>
        </div>
        <div className="flex flex-col space-y-4 items-center ">
          <h2 className="font-semibold text-base">Useful Links</h2>
          <div className="flex flex-col space-y-2 font-light dark:text-gray-400">
            {/* TODO: fix these links to work with Spanish */}
            <a href="/en/about" className="hover:underline">
              About Us
            </a>
            <a href="/en/info" className="hover:underline">
              Info
            </a>
            <a href="/en/FAQ" className="hover:underline">
              FAQ
            </a>
          </div>
        </div>

        <div className="flex flex-col space-y-4 items-center ">
          <h2 className="font-semibold text-base">Contact Us</h2>
          <div className="flex flex-col space-y-2 dark:text-gray-400">
            <a
              rel="noopener noreferrer"
              href="https://github.com/PrayTeam"
              className="hover:underline"
            >
              GitHub
            </a>
            <a rel="noopener noreferrer" href="#" className="hover:underline">
              Discord
            </a>
            <a rel="noopener noreferrer" href="#" className="hover:underline">
              Facebook
            </a>
            <a rel="noopener noreferrer" href="#" className="hover:underline">
              Email
            </a>
          </div>
        </div>

        <div className="flex flex-col space-y-4 items-center ">
          <h2 className="font-semibold text-base">Support</h2>
          <div className="flex flex-col space-y-2 dark:text-gray-400 w-24">
            <Button
              className="border border-stone bg-leaf hover:scale-105 transition duration-150"
              onClick={() => navigate("/donate")}
            >
              Donate
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-12 text-sm flex-row space-x-8">
        <span className="dark:text-gray-400">
          © Copyright 2024. All Rights Reserved.
        </span>
        <span>
          <a href="/en/privacy" className="text-gray hover:underline">
            Privacy Policy
          </a>
        </span>
      </div>
    </footer>
  );
}
