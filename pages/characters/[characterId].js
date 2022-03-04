import { SWRConfig } from "swr";
import Character from "../../Components/characters/Character";

const CharacterPage = ({ url, fallback }) => {
  return (
    <SWRConfig value={fallback}>
      <Character url={url} />;
    </SWRConfig>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://rickandmortyapi.com/api/character`);
  const characters = await res.json();
  return {
    paths: characters.results.map((character) => ({
      params: { characterId: character.id.toString() },
    })),
    fallback: true, // false or 'blocking'
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.characterId;
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const res = await fetch(url);
  const character = await res.json();

  return {
    props: {
      fallback: {
        url: character,
      },
      url,
    },
  };
};

export default CharacterPage;
