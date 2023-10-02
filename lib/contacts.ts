'use server';
import { singleFileUpload } from '@app/utils';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const baseURL = 'http://localhost:3000';

export async function getContacts() {
  try {
    const res = await fetch(`${baseURL}/api/contacts`);
    return res.json();
  } catch (err) {
    console.log(err);
  }
}

export async function createContact(_: any, formData: FormData, image: string) {
  const schema = z.object({
    name: z.string().nonempty(),
    email: z.string().nonempty(),
    phone: z.string().nonempty(),
    image: z.string().nonempty(),
  });

  if (!image) {
    return { message: 'Please upload an image', error: true };
  }

  const fileName = await singleFileUpload(image);

  const data = schema.parse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    image: fileName,
  });

  try {
    await fetch(`${baseURL}/api/contacts`, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    revalidatePath('/');
    return { message: 'Contact Created' };
  } catch (err) {
    return { message: 'Something went wrong' };
  }
}

export async function removeContact(_: any, formData: FormData) {
  const schema = z.object({
    id: z.number(),
  });

  const data = schema.parse({
    id: JSON.parse(formData.get('id') as string),
  });

  try {
    await fetch(`${baseURL}/api/contacts/${data?.id}`, {
      method: 'DELETE',
    });

    revalidatePath('/');
    return { message: 'Contact Deleted' };
  } catch (err) {
    return { message: 'Something went wrong' };
  }
}

export async function updateContact(_: any, formData: FormData, image: string) {
  const schema = z.object({
    id: z.number().optional(),
    name: z.string().nonempty(),
    email: z.string().nonempty(),
    phone: z.string().nonempty(),
    image: z.string().optional(),
  });

  if (!image) {
    return { message: 'Please upload an image', error: true };
  }

  const awsLink = image.includes(process.env.AWS_BUCKET_NAME as string);

  let fileName: string = '';

  if (!awsLink) {
    fileName = await singleFileUpload(image);
  }

  const data = schema.parse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    image: fileName,
  });

  if (awsLink) {
    delete data.image;
  }

  try {
    await fetch(
      `${baseURL}/api/contacts/${JSON.parse(formData.get('id') as string)}`,
      {
        method: 'PUT',
        body: JSON.stringify(data),
      }
    );

    revalidatePath('/');
    return { message: 'Contact Updated' };
  } catch (err) {
    return { message: 'Something went wrong' };
  }
}
