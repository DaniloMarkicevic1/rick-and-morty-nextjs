import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "../../fetcher/fetcher";

const Locations = () => {
  const { data: locations } = useSWR(
    `https://rickandmortyapi.com/api/location`,
    fetcher
  );

  return !locations ? null : (
    <ol>
      {locations.results.map((location) => (
        <li key={location.id}>
          <Link href={`/locations/${location.id}`}>
            <a className={"asd"}>
              <p>Name: {location.name}</p>
            </a>
          </Link>
        </li>
      ))}
    </ol>
  );
};

export default Locations;
