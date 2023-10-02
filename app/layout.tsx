import React from 'react';
import type { Metadata } from 'next';
import { MainLayout } from '@app/layout';
import { ModalProvider } from '@app/contexts';
import { Overlay } from '@app/components';

import '@app/public/global.css';
import '@app/public/fonts/glysa/stylesheet.css';
import '@app/public/fonts/lexend/stylesheet.css';

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Contact List',
  description: 'Developer Challenge.',
};

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html>
      <body className="antialiased bg-g-100">
        <ModalProvider>
          <MainLayout>
            {children}
            <Overlay />
          </MainLayout>
        </ModalProvider>
      </body>
    </html>
  );
};

export default RootLayout;
