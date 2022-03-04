import useSWR from "swr";
import { fetcher } from "../../fetcher/fetcher";

const Location = ({ url }) => {
  const { data: location } = useSWR(url, fetcher);
  return !location ? null : (
    <>
      <p>Name: {location.name}</p>
      <p>Type: {location.type}</p>
      <p>Dimension: {location.dimension}</p>
      <p>Residents: {location.residents.length}</p>
    </>
  );
};

export default Location;
