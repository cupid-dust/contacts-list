'use client';
import React from 'react';
import { ContactItem } from '@app/components';
import type { Contact } from '@app/types';
import { motion } from 'framer-motion';

interface MainProps {
  contacts: Contact[];
}
const Main = ({ contacts }: MainProps) => {
  return (
    <div className="px-6 mt-6 space-y-6">
      {contacts?.map((contact: Contact) => (
        <motion.div
          key={contact?.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 15,
            delay: 0.2,
          }}
          variants={{
            visible: { x: 0, opacity: 1 },
            hidden: { x: -50, opacity: 0 },
          }}
        >
          <ContactItem contact={contact} />
        </motion.div>
      ))}
    </div>
  );
};

export default Main;
