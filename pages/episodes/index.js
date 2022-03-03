import Image from "next/image";
import Link from "next/link";

const Episodes = ({ episodes }) => {
  return (
    <ol>
      {episodes.results.map((episode) => (
        <li key={episode.id}>
          <Link href={`/episode/${episode.id}`}>
            <a>{episode.name}</a>
          </Link>
          <p>Air date: {episode.air_date}</p>
        </li>
      ))}
    </ol>
  );
};
export const getStaticProps = async () => {
  const res = await fetch(`https://rickandmortyapi.com/api/episode`);
  const episodes = await res.json();
  return {
    props: {
      episodes,
    },
  };
};
export default Episodes;
