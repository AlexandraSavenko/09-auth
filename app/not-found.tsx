import { Metadata } from 'next';
import css from './not-found.module.css'
export const metadata: Metadata = {
  title: "Page not found | Note Hub",
  description: "The page you are looking for does not exist",
     metadataBase: new URL("https://github.com/AlexandraSavenko/08-zustand") ,
  openGraph: {
    title: "Page not found | Note Hub",
    description: "The page you are looking for does not exist",
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
};
const NotFound = () => {
    return <div className={css.wrap}>
    <h1 className={css.title}>404 - Page not found</h1>
<p className={css.description}>Sorry, the page you are looking for does not exist.</p>

    </div>
}
export default NotFound
