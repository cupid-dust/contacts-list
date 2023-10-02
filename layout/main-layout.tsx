'use client';
import React from 'react';
import { BackArrow, Sun, Settings, Add } from '@app/components/svg';
import Link from 'next/link';
import { collapse } from '@growthops/ext-ts';
import { Avatar, Button, Heading } from '@app/components';
import { motion } from 'framer-motion';
import { useModal } from '@app/hooks';

interface LayoutProps {
  children: React.ReactNode;
}

const baseClasses =
  'border-t border-b border-g-60 md:mt-32 h-24  flex items-center';

const MainLayout = ({ children }: LayoutProps): JSX.Element => {
  const { toggle } = useModal() as any;

  return (
    <main className="grid grid-cols-1  md:grid-cols-5 md:h-screen">
      <div className="col-span-1">
        <div
          className={collapse([
            baseClasses,
            'md:justify-end justify-between px-10',
          ])}
        >
          <Link href="/">
            <motion.div
              className="cursor-pointer w-max"
              whileHover={{ x: -10 }}
              transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { scale: 1 },
                hidden: { scale: 0 },
              }}
            >
              <BackArrow />
            </motion.div>
          </Link>
          <motion.div
            className="cursor-pointer w-max md:hidden block"
            whileHover={{ rotate: 30 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { rotate: 60 },
              hidden: { rotate: 0 },
            }}
          >
            <Sun />
          </motion.div>
        </div>
      </div>
      <div className="col-span-1 md:col-span-3 border-l border-r border-g-60 ">
        <div className={collapse([baseClasses, 'px-6 justify-between '])}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            variants={{
              visible: { y: 0, scale: 1 },
              hidden: { y: 50, scale: 0 },
            }}
          >
            <Heading variant="heading-one" label="Contacts" element="h1" />
          </motion.div>
          <div className="flex items-center gap-7">
            <motion.div
              className="cursor-pointer w-max"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ rotate: 30 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 18,
              }}
              variants={{
                visible: { scale: 1 },
                hidden: { scale: 0 },
              }}
            >
              <Settings />
            </motion.div>
            <motion.div
              className="cursor-pointer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 18,
              }}
              variants={{
                visible: { scale: 1 },
                hidden: { scale: 0 },
              }}
            >
              <Avatar size="small" image="/images/Timothy.jpg" hasBorder />
            </motion.div>
            <motion.div
              className="cursor-pointer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 18,
              }}
              variants={{
                visible: { scale: 1 },
                hidden: { scale: 0 },
              }}
            >
              <Button.Semantic
                label="Add new"
                variant="secondary"
                size="regular"
                type="button"
                onClick={toggle}
                icon={{
                  svg: Add,
                  alignment: 'center',
                  className: 'fill-white',
                }}
              />
            </motion.div>
          </div>
        </div>
        {children}
      </div>
      <div className="col-span-1 md:block hidden">
        <div className={collapse([baseClasses, 'justify-start px-10'])}>
          <motion.div
            className="cursor-pointer w-max"
            whileHover={{ rotate: 30 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { rotate: 60 },
              hidden: { rotate: 0 },
            }}
          >
            <Sun />
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
