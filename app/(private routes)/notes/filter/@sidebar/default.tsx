import Link from 'next/link';
import css from './SidebarNotes.module.css'
const SidebarNotes = () => {
const categories = ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping']

  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <Link href={`/notes/filter/all`} className={css.menuLink}>All notes</Link>
      </li>
      {categories.map((category, i) => (
        <li key={i}>
          <Link href={`/notes/filter/${category}`} className={css.menuLink}>{category}</Link>
        </li>
      ))}
    </ul>
  );
}

export default SidebarNotes;