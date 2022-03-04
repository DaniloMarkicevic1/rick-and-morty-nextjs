import { SWRConfig } from "swr";
import Locations from "../../Components/locations/Locations";

const LocationsPage = ({ fallback }) => {
  return (
    <SWRConfig value={fallback}>
      <Locations />
    </SWRConfig>
  );
};

export const getStaticProps = async () => {
  const url = `https://rickandmortyapi.com/api/location`;
  const res = await fetch(url);
  const locations = await res.json();

  return {
    props: {
      fallback: {
        url: locations,
      },
    },
  };
};

export default LocationsPage;
