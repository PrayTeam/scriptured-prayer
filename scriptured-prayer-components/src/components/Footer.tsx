import { useNavigate } from "react-router-dom";
import { Button } from "~/components/form";
import { theme } from "~/tailwind.config";
import { FooterColumn } from "~/components";
import { FooterLinks } from "~/components";

interface FooterProps {
  color: keyof typeof theme.colors;
  text?: keyof typeof theme.colors;
}

export function Footer({ color, text }: FooterProps) {
  const navigate = useNavigate();

  return (
    <footer
      className="p-12 py-10 dark:bg-gray-800 dark:text-gray-100 text-white"
      style={{ backgroundColor: theme.colors[color], color: text }}
    >
      <div className="p-5 container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4 sm:justify-items-center md:justify-items-center">
        <FooterColumn>
          <h1 className="text-2xl font-bold">Scriptured Prayer</h1>
          <h2 className="font-medium">Logo placeholder</h2>
        </FooterColumn>
        <FooterColumn>
          <h2 className="font-semibold text-base">Useful Links</h2>
          <FooterLinks>
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
          </FooterLinks>
        </FooterColumn>

        <FooterColumn>
          <h2 className="font-semibold text-base">Contact Us</h2>
          <FooterLinks>
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
          </FooterLinks>
        </FooterColumn>

        <FooterColumn>
          <h2 className="font-semibold text-base">Support</h2>
          <FooterLinks>
            <Button
              className="border border-stone bg-leaf hover:scale-105 transition duration-150"
              onClick={() => navigate("/donate")}
            >
              Donate
            </Button>
          </FooterLinks>
        </FooterColumn>
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
