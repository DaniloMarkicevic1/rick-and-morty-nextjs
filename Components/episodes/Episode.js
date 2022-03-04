import useSWR from "swr";
import { fetcher } from "../../fetcher/fetcher";
import classes from "../../styles/episodes.module.css";

const Episode = ({ url }) => {
  const { data: episode } = useSWR(url, fetcher);
  return !episode ? null : (
    <div className={classes.epCard}>
      <p>Name: {episode.name}</p>
      <p>Episode: {episode.episode}</p>
      <p>Aired: {episode.air_date}</p>
      <p>Characters: {episode.characters.length}</p>
    </div>
  );
};

export default Episode;
