import { SWRConfig } from "swr";
import Episode from "../../Components/episodes/Episode";

const EpisodePage = ({ fallback, url }) => {
  return (
    <>
      <SWRConfig value={fallback}>
        <Episode url={url} />
      </SWRConfig>
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://rickandmortyapi.com/api/episode`);
  const episodes = await res.json();
  return {
    paths: episodes.results.map((episode) => ({
      params: {
        episodeId: episode.id.toString(),
      },
    })),
    fallback: true, // false or 'blocking'
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.episodeId;
  const url = `https://rickandmortyapi.com/api/episode/${id}`;
  const res = await fetch(url);
  const episode = await res.json();
  return {
    props: {
      fallback: {
        url: episode,
      },
      url,
    },
  };
};
export default EpisodePage;
