'use client'

import { fetchNoteById } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import css from "./NotePreview.module.css"
import { useRouter } from "next/navigation";

const NotePreviewClient = () => {
const { id } = useParams<{ id: string}>()

const router = useRouter()

const {data: note, isLoading, error} = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById({id}),
    refetchOnMount: false
})
if(isLoading) return <p style={{textAlign: "center"}}>Loading, please wait...</p>

if(error || !note) return <p style={{textAlign: 'center'}}>Something went wrong.</p>
const close = () => router.back()
return <div className={css.backdrop}>
<div className={css.container}> 
           <button className={css.backBtn} onClick={close}>X</button>

	<div className={css.item}>
	  <div className={css.header}>
	    <h2>{note.title}</h2>
	  </div>
	  <p className={css.content}>{note.content}</p>
	  <p className={css.date}>{note.createdAt}</p>
	</div>
</div></div>

}

export default NotePreviewClient;