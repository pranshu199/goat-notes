"use client"

import { Note } from "@prisma/client"
import {SidebarGroupContent as SidebarGroupContentShadCN, SidebarMenu} from "@/components/ui/sidebar";
import { SearchIcon } from "lucide-react";
import { Input } from "./input";
import { useEffect, useState } from "react";

type Props = {
    notes: Note[]
}

function SidebarGroupContent({notes}: Props) {
  const [searchText, setSearchText] = useState("");
  const [localNotes, setLocalNotes] = useState(notes);

  useEffect(()=>{
    setLocalNotes(notes)
  },[notes]);

   

  return (
    <SidebarGroupContentShadCN>
      <div className="relative flex items-center">
        <SearchIcon className="absolute left-2 size-4"/>
        <Input 
          className="bg-muted pl-8"
          placeholder="Search your notes"
          value ={searchText}
          onChange ={(e)=>{setSearchText(e.target.value)}} 
        />
      </div>
    </SidebarGroupContentShadCN>
  )
}

export default SidebarGroupContent