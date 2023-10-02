import React from 'react';
import { UserInfo, Menu } from '@app/components';
import { HeadPhones, Mute } from '@app/components/svg';
import type { Contact } from '@app/types';

interface ContactItem {
  contact: Contact;
}

const ContactItem = ({ contact }: ContactItem): JSX.Element => {
  return (
    <div className="group flex items-center justify-between">
      <UserInfo
        name={contact?.name}
        phone={contact?.phone}
        image={contact?.image}
      />
      <div className="items-center gap-5 flex group-hover:visible invisible">
        <div className="cursor-pointer">
          <Mute />
        </div>
        <div className="cursor-pointer">
          <HeadPhones />
        </div>
        <Menu contact={contact} />
      </div>
    </div>
  );
};

export default ContactItem;
