"use server"
import {prisma} from '@/lib/db'
export type conversationListItem = {
    id: string,
    title: string ,
    isPinned : boolean,
    isArchived : boolean,
    lastMessageAt :Date,
    createdAt : Date,
    updatedAt :  Date
}

export async function listConversation() {
    const user = await requireUser();
    
}