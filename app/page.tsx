"use client";
import Link from "next/link";
import { GetCharacterResults, Character } from "@/types";
import { NextPage } from "next";
import imageLoader from "@/imageLoader";
import Image from "next/image";
import { useEffect, useState } from "react";


const style = {
  main: `flex min-h-screen flex-col items-center justify-between p-24`,
};

const Home: NextPage<{ characters: Character[] }> = ({ characters }) => {
  const [props, setProps] = useState<any>({})

  useEffect(()=> {
    getProps().then((props) => {setProps(props.props.characters)})
  },[characters])

  console.log(props)

  return (
    <div className={style.main}>
      {characters?.map((character) => {
        console.log(character.name);
        return (
          <div key={character.id}>
            {character.name}
            <Image
              loader={imageLoader}
              unoptimized
              src={character.image}
              alt={character.name}
              width={200}
              height={200}
            />
          </div>
        );
      })}
      {/* <Link href={`/characters/${character.id}`}>
        <a>
          <h3>{character.name}</h3>
        </a>
      </Link> */}

      <hr />
    </div>
  );

  async function getProps() {
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const { results }: GetCharacterResults = await res.json();

    return {
      props: {
        characters: results,
      },
    };
  }
};

export default Home;
