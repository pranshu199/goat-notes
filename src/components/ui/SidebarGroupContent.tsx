"user client"

import { Note } from "@prisma/client"

type Props = {
    notes: Note[]
}

function SidebarGroupContent({notes}: Props) {
    console.log(notes);
  return (
    <div>Your Notes here</div>
  )
}

export default SidebarGroupContent