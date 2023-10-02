'use client';
import React from 'react';
import { Button } from '@app/components';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

const FormButton = (): JSX.Element => {
  const { pending } = useFormStatus();
  return (
    <Button.Semantic
      disabled={pending}
      label={pending ? 'loading...' : 'Done'}
      variant="primary"
      type="submit"
      size="large"
    />
  );
};
export default FormButton;
