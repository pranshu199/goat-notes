import { prisma } from "@/db/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
const userId = searchParams.get("userId");

if (!userId) {
  return NextResponse.json({ error: "Missing userId" }, { status: 400 });
}

const newestNote = await prisma.note.findFirst({
  where: {
    authorId: userId,
  },
  orderBy: {
    createdAt: "desc",
  },
  select: {
    id: true,
  },
});

if (!newestNote) {
  return NextResponse.json({ error: "No notes found", newestNoteId: null }, { status: 404 });
}

return NextResponse.json({
  newestNoteId: newestNote.id,
});

}