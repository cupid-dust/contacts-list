import { Prisma } from '@app/utils';
import { NextResponse } from 'next/server';
import { getFileUrl } from '@app/utils';

export async function GET() {
  try {
    const contacts = await Prisma.contact.findMany();

    const contactsWithUrls = await Promise.all(
      contacts.map(async (contact) => {
        const image = await getFileUrl(contact.image as string);
        return { ...contact, image };
      })
    );

    return NextResponse.json(contactsWithUrls);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const contact = await Prisma.contact.create({
      data: body,
    });
    return NextResponse.json(contact);
  } catch (error) {
    return NextResponse.json(error);
  }
}
