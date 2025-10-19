import { Note, NoteFormValues } from "@/types/note"
import { api } from "./api"

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

export type RegisterRequest = {
    email: string;
    password: string;
}

export type User = {
    id: string;
    email: string;
    userName?: string;
    photoURL?: string;
    createdAt: Date;
    updatedAt: Date;
}

export const register = async (data: RegisterRequest) => {
    console.log("data", data)
    const res = await api.post<User>('/auth/register', data);
    console.log("register", res)
    return res.data;
}

export const login = async (data: RegisterRequest) => {
    const res = await api.post<User>('/auth/login', data)
    return res.data;
}