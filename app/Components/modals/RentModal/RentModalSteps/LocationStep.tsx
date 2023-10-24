import Heading from "@/app/Components/Heading";
import CountrySelect from "@/app/Components/inputs/CountrySelect";

interface LocationStepProps {
  location: any;
  setLocation: (id: string, value: any) => void;
  Map: React.ComponentType<any>;
}

const LocationStep: React.FC<LocationStepProps> = ({
  location,
  setLocation,
  Map
}) => (
  <div className="flex flex-col gap-8">
    <Heading
      title="Where is your place located?"
      subtitle="Help guests find you!"
    />
    <CountrySelect
      value={location}
      onChange={(location) => setLocation('location', location)}
    />
    <Map center={location?.latlng} />
  </div>
);

export default LocationStep;