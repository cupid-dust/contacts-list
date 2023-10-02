import React from 'react';
import { Avatar, Heading, Text } from '@app/components';

interface InfoProps {
  image?: string;
  name: string;
  phone: string;
}

const UserInfo = ({ image = '', name, phone }: InfoProps): JSX.Element => {
  return (
    <div className="flex items-center gap-4">
      <Avatar image={image ?? '/images/Default.jpg'} size="regular" />
      <div>
        <Heading label={name} variant="heading-three" element="h3" />
        <Text variant="text-regular" className="text-white/[56%]">
          {phone}
        </Text>
      </div>
    </div>
  );
};

export default UserInfo;
