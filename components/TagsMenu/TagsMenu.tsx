'use client'
import Link from 'next/link';
import css from './TagsMenu.module.css';
import { useState } from 'react';

const TagsMenu = () => {
        const categories = ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping']
const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {setIsOpen(!isOpen); console.log(isOpen)};
    return <div className={css.menuContainer}>
  <button onClick={toggle} className={css.menuButton}>
    Notes ▾
  </button>
    {isOpen && <ul className={css.menuList}>
    {/* список тегів */}
      <li className={css.menuItem}>
            <Link href={`/notes/filter/all`} onClick={toggle}>
              All notes
            </Link>
          </li>
          {categories.map((category, i) => (
            <li key={i} className={css.menuItem}>
              <Link href={`/notes/filter/${category}`} onClick={toggle}>
                {category}
              </Link>
            </li>
          ))}
    </ul>}
</div>

}

export default TagsMenu;