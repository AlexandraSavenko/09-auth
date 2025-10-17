import { fetchNotes } from "@/lib/api";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/utils/getQueryClient";
import NotesClient from "./Notes.client";
import { describe } from "node:test";
import { Metadata } from "next";
type Props = {
  params: Promise<{slug: string[]}>
}

export async function generateMetadata ({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const filter = slug?.[0] ?? "all";
  const title = `Note Hub | notes ${filter}`;
  const description = `This page represents all notes with tag ${filter}`
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

const Notes = async ({params}: Props) => {
  const {slug} = await params;
  const category = slug[0] === 'all' ? undefined : slug[0]
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", "", 1],
    queryFn: () => fetchNotes({ category, searchValue: "", page: 1 }),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient category={category} />
    </HydrationBoundary>
  );
};

export default Notes;
