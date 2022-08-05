import Link from "next/link";
import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
};

export const Layout: FC<Props> = ({ children }) => (
  <div className="flex h-screen w-screen items-center justify-center">
    <header className="fixed inset-0 flex h-20 w-full items-center justify-around bg-gray-300 px-8">
      <Link href="/MenuMain">Menu</Link>
      <Link href="/ListBoxMain">ListBox</Link>
      <Link href="/ComboBocMain">ComboBoc</Link>
      <Link href="/SwitchMain">Switch</Link>
      <Link href="/DisclosureMain">Disclosure</Link>
      <Link href="/DialogMain">Dialog</Link>
      <Link href="/PopoverMain">Popover</Link>
      <Link href="/RadioGroupMain">Radio Group</Link>
      <Link href="/TabsMain">Tabs</Link>
      <Link href="/transitionMain">Transition</Link>
    </header>
    <main>{children}</main>
  </div>
);
