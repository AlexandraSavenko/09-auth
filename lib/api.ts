import { Note, NoteFormValues } from "@/types/note"
import axios from "axios"

interface FetchNotesResponse {
    notes: Note[],
    totalPages: number
}
interface FetchNotesParams {
    category: string | undefined,
    searchValue: string,
    page: number
}
interface FetchNoteDetails {
    id: string,
    title: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    tag: string
}

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`
    }

})
export const fetchNotes = async ({category, searchValue, page}: FetchNotesParams): Promise<FetchNotesResponse> => {
//     const searchParams: Record<string, string> = {}
//     if(searchValue) searchParams.search = searchValue
//     if(page) searchParams.page = page.toString()
//         if(category) searchParams.tag = category
//     const query = new URLSearchParams(searchParams)
//     console.log(process.env.NEXT_PUBLIC_API_URL)
// const res = await api.get<FetchNotesResponse>(`/notes?${query}`);
const res = await api.get<FetchNotesResponse>('/notes', {
    params: { category, searchValue, page }
})
return res.data
}

export const fetchNoteById = async ({ id }: {id: string}) => {

const res = await api.get<FetchNoteDetails>(`/notes/${id}`)

return res.data
}

export const createNote = async (newNote: NoteFormValues) => {
    const res = await api.post<Note>('/notes', newNote);
    return res.data
}
export const deleteNote = async (noteId: string) => {
     const res = await api.delete(`/notes/${noteId}`);
    return res.data
}