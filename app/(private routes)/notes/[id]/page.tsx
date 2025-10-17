import { fetchNoteById } from "@/lib/api";
import getQueryClient from "@/utils/getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import NoteDetailsClient from "./NoteDetails.client";
import { Metadata } from "next";
import { Note } from "@/types/note";

type Props = {
    params: Promise<{id: string}>
}

export async function generateMetadata ({params}: Props): Promise<Metadata> {
  const {id} = await params;
  const res: Note = await fetchNoteById({id})
  const title = `Note Hub | ${res.title}`;
  const description = `Note details ${res.content.slice(0, 120)}...`
 return {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://github.com/AlexandraSavenko/08-zustand",
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: "Not found page image"

      }
    ]
  }
 }
}
const NoteDetails = async ({params}: Props) => {
const { id } = await params;

const queryClient = getQueryClient();
await queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById({id})
})
return <HydrationBoundary state={dehydrate(queryClient)}>
    <NoteDetailsClient/>
</HydrationBoundary>
}

export default NoteDetails;