"use client"

import { useSearchParams } from "next/navigation";
import { Textarea } from "./textarea";
import { ChangeEvent, useEffect } from "react";
import { debounceTimeout } from "@/lib/constants";
import useNote from "@/hooks/useNote";
import { updateNoteAction } from "@/actions/notes";
import { Toaster, toast } from 'sonner';


type Props = {
    noteId: string;
    startingNoteText: string;
}

let updateTimeout: NodeJS.Timeout;

function NoteTextInput({noteId, startingNoteText}: Props) {
  const noteIdParams = useSearchParams().get(noteId) || "";
  const {noteText, setNoteText} = useNote();

  useEffect( ()=>{
    if(noteIdParams === noteId){
      setNoteText(startingNoteText);
    }
  },[startingNoteText, noteIdParams, noteId, setNoteText])

  const handleUpdateNote = (e:ChangeEvent<HTMLTextAreaElement>)=> {
    const text = e.target.value;

    setNoteText(text);
    clearTimeout(updateTimeout);
    updateTimeout = setTimeout(()=>{
      updateNoteAction(noteId, text);
      toast.success("Saved Current Note ")
    }, debounceTimeout)
  }; 
  return (
    <Textarea 
    value ={noteText}
    onChange={handleUpdateNote}
    placeholder="Type Your notes here..."
    className="custom-scrollbar placeholder:text-muted-foreground mb-4 h-full max-w-4xl
    resize-none border p-4 focus-visible:ring-0 focus-visible:ring-offset-0"
    />
  )
}

export default NoteTextInput