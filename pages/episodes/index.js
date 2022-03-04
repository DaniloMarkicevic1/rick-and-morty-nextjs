import { SWRConfig } from "swr";
import Episodes from "../../Components/episodes/Episodes";

const EpisodesPage = ({ fallback }) => {
  return (
    <SWRConfig value={fallback}>
      <Episodes />
    </SWRConfig>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`https://rickandmortyapi.com/api/episode`);
  const episodes = await res.json();

  return {
    props: {
      fallback: {
        "https://rickandmortyapi.com/api/episode": episodes,
      },
    },
  };
};
export default EpisodesPage;
