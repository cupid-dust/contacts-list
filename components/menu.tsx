'use client';
import { Menu as MenuWrapper, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { More, Settings, Heart, TrashBin } from '@app/components/svg';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { experimental_useFormState as useFormState } from 'react-dom';

import { useModal } from '@app/hooks';
import { removeContact } from '@app/lib';
import { Contact } from '@app/types';

const initialState = {
  message: null,
};

interface MenuProps {
  contact: Contact;
}

const Menu = ({ contact }: MenuProps): JSX.Element => {
  const [_, formAction] = useFormState(removeContact, initialState) as any;
  const { pending } = useFormStatus() as any;
  const { toggle } = useModal() as any;

  return (
    <div className="-mt-[6px]">
      <MenuWrapper as="div" className="relative inline-block text-left">
        <MenuWrapper.Button data-testid="more">
          <More />
        </MenuWrapper.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuWrapper.Items className="overflow-hidden absolute right-0 mt-2 w-56 origin-top-right rounded-lg bg-g-80 ring-black ring-opacity-5 focus:outline-none z-10">
            <div>
              <MenuWrapper.Item>
                {({ active }) => (
                  <button
                    onClick={() => toggle(contact)}
                    className={`${
                      active ? 'bg-g-70 ' : 'bg-transparent'
                    } group   w-full    focus:bg-g-60 text-lead px-[10px] p-3`}
                  >
                    <span className="flex items-center gap-3">
                      <Settings className="fill-white/[56%]" /> Edit
                    </span>
                  </button>
                )}
              </MenuWrapper.Item>
              <MenuWrapper.Item>
                {({ active }) => (
                  <button
                    aria-disabled={pending}
                    className={`${
                      active ? 'bg-g-70 ' : 'bg-transparent'
                    } group gap-3 flex w-full items-center   focus:bg-g-60 text-lead px-[10px] p-3`}
                  >
                    <Heart className="fill-white/[56%]" /> Favourite
                  </button>
                )}
              </MenuWrapper.Item>
              <MenuWrapper.Item>
                {({ active }) => (
                  <form action={formAction}>
                    <input hidden name="id" value={contact?.id} />

                    <button
                      type="submit"
                      className={`${
                        active ? 'bg-g-70 ' : 'bg-transparent'
                      } group gap-3 flex w-full items-center   focus:bg-g-60 text-lead p-3`}
                    >
                      <TrashBin className="fill-white/[56%]" /> Remove
                    </button>
                  </form>
                )}
              </MenuWrapper.Item>
            </div>
          </MenuWrapper.Items>
        </Transition>
      </MenuWrapper>
    </div>
  );
};

export default Menu;
