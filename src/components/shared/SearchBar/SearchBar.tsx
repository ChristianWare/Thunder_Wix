"use client";

import styles from "./SearchBar.module.css";
import SearchIcon from "../../../../public/icons/search.svg";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  closeMenu?: () => void;
}


export default function SearchBar({ closeMenu }: SearchBarProps) {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

     if (closeMenu) {
       closeMenu();
     }


    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSearch}>
      <SearchIcon className={styles.icon} />
      <input
        type='text'
        name='name'
        placeholder='What are you searching for?'
        className={styles.input}
      />
    </form>
  );
}
