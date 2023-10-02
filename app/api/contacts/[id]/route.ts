import { Prisma } from '@app/utils';
import { NextResponse } from 'next/server';

export async function DELETE(request: Request) {
  const id = JSON.parse(request.url.slice(request.url.lastIndexOf('/') + 1));

  try {
    await Prisma.contact.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(id);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function PUT(request: Request) {
  const id = JSON.parse(request.url.slice(request.url.lastIndexOf('/') + 1));
  const body = await request.json();

  try {
    const contact = await Prisma.contact.update({
      data: body,
      where: {
        id: id,
      },
    });
    return NextResponse.json(contact);
  } catch (error) {
    return NextResponse.json(error);
  }
}
