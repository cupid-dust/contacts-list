'use client';
import React, { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useDropzone } from 'react-dropzone';
import { Avatar, Button, Input, FormButton } from '@app/components';
import { Add, Recycle, TrashBin } from '@app/components/svg';
import { toBase64 } from '@app/utils';
import { useModal } from '@app/hooks';
import { experimental_useFormState as useFormState } from 'react-dom';
import { createContact, updateContact } from '@app/lib';

const intialState = {
  message: null,
  error: false,
};

const Overlay = (): JSX.Element => {
  const { isOpen, toggle, contact } = useModal() as any;
  const [blob, setBlog] = useState<string>('');

  const [state, formAction] = useFormState(
    (prevState: any, formdData: FormData) =>
      contact?.id
        ? updateContact(prevState, formdData, blob)
        : createContact(prevState, formdData, blob),
    intialState
  );

  const handleDropCover = async ([file]: File[]) => {
    const data = (await toBase64(file)) as string;
    setBlog(data);
  };

  const handleRemoveCover = (): void => {
    setBlog('');
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDropCover,
  });

  useEffect(() => {
    if (state?.message && !state.error) {
      toggle();
      handleRemoveCover();
    }

    if (contact?.image) {
      setBlog(contact?.image);
    }

    return () => {
      setBlog('');
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, contact?.image]);

  return (
    <React.Fragment>
      <Transition appear show={isOpen} as={Fragment} data-testid="add-contact">
        <Dialog as="div" className="relative z-10" onClose={toggle}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <form action={formAction} className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[364px] transform overflow-hidden rounded-lg bg-g-100 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h2" className="mb-6">
                    {contact?.id ? 'Edit contact' : 'Add contact'}
                  </Dialog.Title>
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar
                      size="large"
                      image={!blob ? '/images/Default.jpg' : blob}
                    />

                    <div className="flex items-center gap-2">
                      <div {...getRootProps()}>
                        <input {...getInputProps({ name: 'file' })} />
                        <Button.Semantic
                          data-testid="add-picture"
                          label={blob ? 'Change picture' : 'Add picture'}
                          variant="primary"
                          type="button"
                          size="large"
                          icon={{
                            svg: blob ? Recycle : Add,
                            alignment: 'left',
                            className: 'fill-white',
                          }}
                        />
                      </div>
                      {blob && (
                        <Button.Semantic
                          data-testid="remove"
                          variant="primary"
                          type="button"
                          size="small"
                          icon={{
                            svg: TrashBin,
                            alignment: 'center',
                            className: 'fill-white',
                          }}
                          onClick={handleRemoveCover}
                        />
                      )}
                    </div>
                  </div>
                  <div className="space-y-6 mb-12">
                    <Input
                      label="Name"
                      type="text"
                      placeholder="Jamie Wright"
                      required
                      name="name"
                      defaultValue={contact?.name}
                    />
                    <Input
                      label="Phone number"
                      type="text"
                      placeholder="+01 234 5678"
                      required
                      name="phone"
                      defaultValue={contact?.phone}
                    />
                    <Input
                      label="Email address "
                      type="text"
                      placeholder="jamie.wright@mail.com"
                      required
                      name="email"
                      defaultValue={contact?.email}
                    />
                    {contact?.id && (
                      <Input
                        label="id"
                        type="text"
                        placeholder="contact id"
                        name="id"
                        value={contact?.id}
                        hidden
                        className="hidden"
                      />
                    )}
                  </div>
                  <div className="flex items-center gap-2 justify-end">
                    <Button.Semantic
                      label="Cancel"
                      variant="tertiary"
                      type="button"
                      size="large"
                      onClick={toggle}
                    />
                    <FormButton />
                  </div>
                  {state?.error && (
                    <div className="flex justify-end text-red-500">
                      {state?.message}
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </form>
        </Dialog>
      </Transition>
    </React.Fragment>
  );
};

export default Overlay;
