import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "../../fetcher/fetcher";
import classes from "../../styles/episodes.module.css";

const Episodes = () => {
  const { data: episodes } = useSWR(
    `https://rickandmortyapi.com/api/episode`,
    fetcher
  );
  console.log(episodes);
  return !episodes ? null : (
    <ol className={classes.episodes}>
      {episodes.results.map((episode, i) => (
        <li key={episode.id} className={classes.episode}>
          <Link href={`/episodes/${episode.id}`}>
            <a className={classes.link}>
              {i + 1}.{episode.name}
            </a>
          </Link>
          <p>Air date: {episode.air_date}</p>
        </li>
      ))}
    </ol>
  );
};

export default Episodes;
