import { useNavigate } from "react-router-dom";
import { Button } from "~/components/form";

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="p-6 dark:bg-gray-800 dark:text-gray-100 bg-olive text-white">
      <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Logo placeholder</h2>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Useful Links</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <a rel="noopener noreferrer" href="/en/about">
              About Us
            </a>
            <a rel="noopener noreferrer" href="/en/info">
              Info
            </a>
            <a rel="noopener noreferrer" href="/en/FAQ">
              FAQ
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Support</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <Button
              className="bg-blue color-black w-40 border"
              onClick={() => navigate("/donate")}
            >
              Donate
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Contact Us</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <a rel="noopener noreferrer" href="https://github.com/PrayTeam">
              GitHub
            </a>
            <a rel="noopener noreferrer" href="#">
              Discord
            </a>
            <a rel="noopener noreferrer" href="#">
              Facebook
            </a>
            <a rel="noopener noreferrer" href="#">
              Email
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-left pt-12 text-sm flex-row space-x-2">
        <span className="dark:text-gray-400">
          © Copyright 2024. All Rights Reserved.
        </span>
        <span>
          <a rel="noopener noreferrer" href="/en/privacy" className="text-gray">
            Privacy Policy
          </a>
        </span>
        <span>
          <a rel="noopener noreferrer" href="/en/terms" className="text-gray">
            Terms of Service
          </a>
        </span>
      </div>
    </footer>
  );
}
