import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get('file') as File;
  const category = formData.get('category') as string;
  const service = formData.get('service') as string;

  if (!file || !category) {
    return NextResponse.json({ error: 'Missing data' }, { status: 400 });
  }

  const fileBuffer = Buffer.from(await file.arrayBuffer());
  const dirPath = service
    ? `./data/${category}/${service}`
    : `./data/${category}`;

  const filePath = path.join(dirPath, 'faqs.json');

  try {
    await fs.mkdir(dirPath, { recursive: true });
    await fs.writeFile(filePath, fileBuffer);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Failed to save file' }, { status: 500 });
  }
}
