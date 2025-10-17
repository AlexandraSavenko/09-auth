import NoteForm from '@/components/NoteForm/NoteForm';
import css from './CreateNote.module.css'
import { Metadata } from 'next';

export async function generateMetadata (): Promise<Metadata> {
 return {
  title: "Note Hub | Create Note",
  description: "This page allows you to create a note",
  openGraph: {
    title: "Note Hub | Create Note",
    description: "This page allows you to create a note",
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
const CreateNote = () => {
    return <main className={css.main}>
  <div className={css.container}>
    <h1 className={css.title}>Create note</h1>
	   <NoteForm/>
  </div>
</main>

}

export default CreateNote;