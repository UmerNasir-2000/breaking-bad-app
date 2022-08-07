import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

interface ICharacter {
  char_id: number;
  name: string;
  img: string;
  nickname: string;
}

const Home: NextPage = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(
        "https://www.breakingbadapi.com/api/characters"
      );

      const data = await response.json();

      setCharacters(data);
    };

    fetchCharacters();
  }, []);

  return (
    <>
      <header>
        <h1 className={styles.logo}>Breaking Bad</h1>
      </header>
      <main className={styles.wrapper}>
        <section className={styles.container}>
          {characters.map((character: ICharacter) => (
            <article key={character.char_id} className={styles.card}>
              <img src={character.img} alt={character.name} />
              <h1 className={styles.name}>{character.name}</h1>
            </article>
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
