"use client";

import { useEffect, ChangeEvent } from "react";
import { Textarea } from "./textarea";
import useNote from "@/hooks/useNote";
import { updateNoteAction } from "@/actions/notes";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import { debounceTimeout } from "@/lib/constants";

type Props = {
  noteId: string;
  startingNoteText: string;
};

let updateTimeout: NodeJS.Timeout;

function NoteTextInput({ noteId, startingNoteText }: Props) {
  const searchParams = useSearchParams();
  const currentNoteId = searchParams.get("noteId") || "";
  const { noteText, setNoteText } = useNote();

  //  Keep noteText in sync with newly selected note
  useEffect(() => {
    if (currentNoteId === noteId) {
      setNoteText(startingNoteText);
    }
  }, [noteId, currentNoteId, startingNoteText, setNoteText]);

  const handleUpdateNote = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;

    setNoteText(newText);

    clearTimeout(updateTimeout);
    updateTimeout = setTimeout(() => {
      updateNoteAction(noteId, newText);
      toast.success(" Note saved");
    }, debounceTimeout);
  };

  return (
    <Textarea
      value={noteText}
      onChange={handleUpdateNote}
      placeholder="Type your note here..."
      className="custom-scrollbar placeholder:text-muted-foreground mb-4 h-full max-w-4xl resize-none border p-4 focus-visible:ring-0 focus-visible:ring-offset-0"
    />
  );
}

export default NoteTextInput;
