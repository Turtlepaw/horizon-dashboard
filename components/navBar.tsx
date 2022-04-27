import { GetServerSideProps } from "next";
import { DiscordUser, DiscordUserPartial } from "../utils/types";
import { parseUser } from "../utils/parse-user";
import { ExampleThing } from "./navDropdown";
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid';
import { ChevronDown24Filled as ChevronDownFilled } from "@fluentui/react-icons";
import { CSSProperties } from "react"
import { useToast } from '@chakra-ui/react';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AppProps } from "next/app";

export interface Props {
  user: DiscordUser | DiscordUserPartial;
}

interface LinkItemProps {
  link: string;
  text: string;
}

interface UserProps {
  user: DiscordUser;
}

export function NavMenuLinkItem(props: LinkItemProps) {
  return (
    <a className="hover:underline LinkItem" href={props.link}>
      {props.text}
    </a>
  );
}

export function Link({ Component, pageProps }: AppProps) {
  return (
    <a className="hover:underline LinkItem" href={pageProps.link}>
      {pageProps.text}
    </a>
  );
};

export function NavMenuIcon() {
  return (
    <a href="/">
      <img className="NavMenuIcon" src="/ico.png" />
    </a>
  );
}

export default function NavMenu(props: Props) {
  const toast = useToast();
  const isLoggedIn = props.user != null;
  const colors = {
    defaultText: "text-slate-200",
    defaultBackground: "bg-zinc-800",
    defaultBackgroundHover: "bg-zinc-700",
    logoutText: "text-red-500"
  };
  const Icon = (
    <ChevronDownFilled style={{
      "marginLeft": "5%"
    }} />
  );

  return (
    <div className="text-2xl font-bold text-center NavMenu">
      <NavMenuIcon />
      <NavMenuLinkItem link="/support" text="Support" />
      <NavMenuLinkItem link="/add" text="Invite" />
      <NavMenuLinkItem link="/docs" text="Docs" />
      {
        isLoggedIn ?
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="cursor-pointer NavMenuAvatar NavMenuInline">
              <img className="NavMenuAvatarImg NavMenuInline" src={props.user.avatarURL} />
              {Icon}
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className={`${colors.defaultBackground} absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${active ? `${colors.defaultBackgroundHover}` : colors.defaultText
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm cursor-pointer`}
                        href="/guilds"
                      >
                        My Servers
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${active ? `${colors.defaultBackgroundHover}` : colors.defaultText
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm cursor-pointer`}
                        href="/embeds"
                      >
                        Custom Embeds
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${active ? `${colors.defaultBackgroundHover}` : colors.defaultText
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm cursor-pointer`}
                        href="/embeds/create"
                      >
                        Create Embeds
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${active ? `${colors.defaultBackgroundHover}` : colors.defaultText
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm cursor-pointer`}
                        href="/privacy"
                      >
                        My Privacy
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <CopyToClipboard text={props.user.id} onCopy={() =>

                        toast({
                          title: 'Copied to clipboard.',
                          status: 'success',
                          duration: 2000,
                          isClosable: true,
                        })
                      }>
                        <a
                          className={`${active ? `${colors.defaultBackgroundHover}` : colors.defaultText
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm cursor-pointer`}
                        >
                          Copy My ID
                        </a>
                      </CopyToClipboard>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={`${active ? `${colors.defaultBackgroundHover}` : colors.logoutText
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm cursor-pointer`}
                        href="/api/logout"
                      >
                        Logout
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          :
          <a className="hover:underline cursor-pointer avatarMargin" href="/api/oauth">
            <img className="NavMenuAvatarImg2 NavMenuInline" src="/login.png" alt="Login With Discord" />
          </a>
      }
    </div>
  );
}