import { useNavigate } from "react-router-dom";
import { Button } from "~/components/form";
import { theme } from "~/tailwind.config";
import { FooterColumn, FooterLinks, FooterLink } from "~/components";

type ThemeColor = keyof typeof theme.colors;

interface FooterProps {
  color: ThemeColor;
  text?: ThemeColor;
}

export function Footer({ color, text }: FooterProps) {
  const navigate = useNavigate();

  return (
    <footer
      className="dark:bg-gray-800 dark:text-gray-100 text-white"
      style={{ backgroundColor: theme.colors[color], color: text }}
    >
      <div className="px-6 py-10 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4 sm:justify-items-center md:justify-items-center">
          <FooterColumn>
            <h1 className="text-2xl font-bold">Scriptured Prayer</h1>
            <h2 className="font-medium">Logo placeholder</h2>
          </FooterColumn>
          <FooterColumn>
            <h2 className="font-semibold text-base">Useful Links</h2>
            <FooterLinks>
              {/* TODO: fix these links to work with Spanish */}
              <FooterLink link="/en/about">About Us</FooterLink>
              <FooterLink link="/en/info">Info</FooterLink>
              <FooterLink link="/en/FAQ">FAQ</FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <h2 className="font-semibold text-base">Contact Us</h2>
            <FooterLinks>
              <FooterLink link="https://github.com/PrayTeam">GitHub</FooterLink>
              <FooterLink link="#">Discord</FooterLink>
              <FooterLink link="#">Facebook</FooterLink>
              <FooterLink link="#">Email</FooterLink>
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
        <div className="flex items-center justify-center mt-12 text-sm flex-row space-x-8">
          <span className="dark:text-gray-400">
            © Copyright 2024. All Rights Reserved.
          </span>
          <span>
            <FooterLink
              link="/en/privacy"
              className="text-gray hover:underline"
            >
              Privacy Policy
            </FooterLink>
          </span>
        </div>
      </div>
    </footer>
  );
}
