import { SWRConfig } from "swr";
import Location from "../../Components/locations/location";

const LocationPage = ({ fallback, url }) => {
  return (
    <SWRConfig value={fallback}>
      <Location url={url} />
    </SWRConfig>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://rickandmortyapi.com/api/location`);
  const locations = await res.json();
  return {
    paths: locations.results.map((location) => ({
      params: { locationId: location.id.toString() },
    })),
    fallback: true, // false or 'blocking'
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.locationId;
  const url = `https://rickandmortyapi.com/api/location/${id}`;

  const res = await fetch(url);
  const location = await res.json();

  return {
    props: {
      fallback: {
        url: location,
      },
      url,
    },
  };
};

export default LocationPage;
