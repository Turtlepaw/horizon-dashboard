import { GetServerSideProps } from "next";
import { DiscordUser } from "../utils/types";
import { parseUser } from "../utils/parse-user";
import { ExampleThing } from "./navDropdown";
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

export interface Props {
  user: DiscordUser;
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

export function NavMenuIcon() {
  return (
    <img className="NavMenuIcon" src="/ico.png" />
  );
}

export default function NavMenu(props: Props) {
  const isLoggedIn = props.user != null;

  return (
    <div className="text-2xl font-bold text-center NavMenu">
      <NavMenuIcon />
      <NavMenuLinkItem link="/support" text="Support" />
      <NavMenuLinkItem link="/add" text="Invite" />
      <NavMenuLinkItem link="/privacy" text="Privacy" />
      {
        isLoggedIn ?
        <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="cursor-pointer NavMenuAvatar NavMenuInline">
          <img className="NavMenuAvatarImg NavMenuInline" src={props.user.avatarURL} />
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
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm cursor-pointer`}
                    href="/api/logout"
                  >
                    Logout
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm cursor-pointer`}
                    href="/guilds"
                  >
                    Dashboard
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
        : 
        <a className="hover:underline cursor-pointer avatarMargin" href="/api/oauth">
          <img className="NavMenuAvatarImg2 NavMenuInline" src="/login.png" />
        </a>
      }
    </div>
  );
}