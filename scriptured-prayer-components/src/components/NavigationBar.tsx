import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import React from "react";

const MyNavigationMenu: React.FC = () => (
  <NavigationMenu.Root>
    <NavigationMenu.List>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="/home">Home</NavigationMenu.Link>
      </NavigationMenu.Item>

      <NavigationMenu.Item>
        <NavigationMenu.Link href="/about">About</NavigationMenu.Link>
      </NavigationMenu.Item>

      <NavigationMenu.Item>
        <NavigationMenu.Trigger>More</NavigationMenu.Trigger>
        <NavigationMenu.Content>
          <NavigationMenu.Sub>
            <NavigationMenu.List>
              <NavigationMenu.Item>
                <NavigationMenu.Link href="/services">
                  Services
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link href="/contact">
                  Contact
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Sub>
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      <NavigationMenu.Indicator />
    </NavigationMenu.List>

    <NavigationMenu.Viewport />
  </NavigationMenu.Root>
);

export default MyNavigationMenu;
