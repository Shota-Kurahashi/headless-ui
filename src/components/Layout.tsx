import Link from "next/link";
import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
};

export const Layout: FC<Props> = ({ children }) => (
  <div className="flex h-screen w-screen">
    <header className="fixed inset-0 flex h-32 w-full flex-wrap items-center justify-around space-x-2 bg-gray-300 px-8 md:h-16">
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
    <main className="flex h-full w-full flex-1 flex-col items-center justify-center pt-32 md:pt-16">
      {children}
    </main>
  </div>
);
