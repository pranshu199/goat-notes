"use server"

import { getUser } from "@/auth/server";
import { prisma } from "@/db/prisma";
import { handleError } from "@/lib/utils";

export const updateNoteAction = async(noteId: string, text: string) =>{
    try{
        const user = getUser();
        if(!user){
            throw new Error("must login to update notes");
        }

        await prisma.note.update({
            where: {id: noteId},
            data: {text}
        });
        return {errorMessage: null}
    }
    catch(error){
        return handleError(error);
    }
}
export const createNoteAction = async(noteId: string) =>{
    try{
        const user = await getUser();
        if(!user){
            throw new Error("must login to create notes");
        }

        await prisma.note.create({
            data:{
                id: noteId,
                authorId: user.id,
                text: "this is a demo data notes.ts"
            },
        });
        return {errorMessage: null}
    }
    catch(error){
        return handleError(error);
    }
}