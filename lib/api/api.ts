import { Note, NoteFormValues } from "@/types/note"
import axios from "axios"



const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL + '/api',
    withCredentials: true,
    // headers: {
    //     Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`
    // }

})
