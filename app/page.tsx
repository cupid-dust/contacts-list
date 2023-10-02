import React from 'react';
import { Main } from '@app/views';
import type { Contact } from '@app/types';
import { getContacts } from '@app/lib';

const Page = async (): Promise<JSX.Element> => {
  const contacts: Contact[] = await getContacts();

  return <Main contacts={contacts} />;
};

export default Page;
