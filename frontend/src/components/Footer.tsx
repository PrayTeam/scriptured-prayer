import { useNavigate } from "react-router-dom";
import { Button } from "~/components/form";
import { theme } from "~/tailwind.config";
import { FooterColumn, FooterLinks, FooterLink } from "~/components";
import { ThemeColor } from "~/types";

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
        <div className="grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          <FooterColumn>
            <h1 className="text-2xl font-bold">Scriptured Prayer</h1>
            <h2 className="font-medium">Logo placeholder</h2>
          </FooterColumn>
          <FooterColumn>
            <h2 className="font-semibold text-base">Useful Links</h2>
            <FooterLinks>
              {/* TODO: fix these links to work with Spanish */}
              <FooterLink link="/about">About Us</FooterLink>
              <FooterLink link="/info">Info</FooterLink>
              <FooterLink link="/FAQ">FAQ</FooterLink>
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
              <Button className="bg-leaf" onClick={() => navigate("/donate")}>
                Donate
              </Button>
            </FooterLinks>
          </FooterColumn>
        </div>
        <div className="flex mt-12 text-sm flex-row space-x-8">
          <div className="dark:text-gray-400 grow">
            <span>
              Content on this site, unless otherwise stated, is licensed under
              the{" "}
            </span>
            <FooterLink
              highlight
              link="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            >
              Creative Commons Attribution-NonCommercial-ShareAlike 4.0
              International License
            </FooterLink>
            <span>
              ; additional terms may apply. By using this site, you agree to our{" "}
            </span>
            <FooterLink highlight link="/privacy">
              Privacy Policy
            </FooterLink>
            <span>
              . All Bible scripture text is property of the respective licensor
              of that text.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
