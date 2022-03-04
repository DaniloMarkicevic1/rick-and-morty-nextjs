import { SWRConfig } from "swr";
import Characters from "../../Components/characters/Characters";

const CharactersPage = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Characters />
    </SWRConfig>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`https://rickandmortyapi.com/api/character`);
  const characters = await res.json();

  return {
    props: {
      fallback: {
        "https://rickandmortyapi.com/api/character": characters,
      },
    },
  };
};

export default CharactersPage;
