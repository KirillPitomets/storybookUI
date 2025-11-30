import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import SidebarMenu from "@/Components/SidebarMenu/SidebarMenu";
import {Item } from "@/Components/SidebarMenu/item.type"


const meta = {
  component: SidebarMenu,
} satisfies Meta<typeof SidebarMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const items: Item[] = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Inbox",
    href: "#",
  },
  {
    title: "About",
    href: "#",
  },
  {
    title: "Events",
    href: "#",
    submenu: [
      {
        title: "Fortnite Event Cup",
        href: "#",
      },
      {
        title: "Counter-Strike",
        href: "#",
        submenu: [
          {
            title: "Major Championships",
            href: "#",
          },
          {
            title: "Major Championships",
            href: "#",
          },
          {
            title: "Major Championships",
            href: "#",
          },
        ],
      },
    ],
  },
];

const itemsWithoutSubmenu: Item[] = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Inbox",
    href: "#",
  },
  {
    title: "About",
    href: "#",
  },
  {
    title: "Events",
    href: "#"
  },
];

export const SidebarWithSubmenus: Story = {
  args: {
    menuItems: items,
    isShow: true
  },
};

export const SidebarWithoutSubmenus: Story = {
  args: {
    menuItems: itemsWithoutSubmenu,
    isShow: true
  },
};

export const hideSidebar: Story = {
  args: {
    menuItems: items,
    isShow: false
  },
};
