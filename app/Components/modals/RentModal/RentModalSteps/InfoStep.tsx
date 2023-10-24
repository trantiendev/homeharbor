import Heading from "@/app/Components/Heading";
import Counter from "@/app/Components/inputs/Counter";

interface InfoStepProps {
  guestCount: number
  roomCount: number
  bathroomCount: number
  setInfo: (id: string, value: any) => void
}

const InfoStep: React.FC<InfoStepProps> = ({
  guestCount,
  roomCount,
  bathroomCount,
  setInfo
}) => (
  <div className="flex flex-col gap-8">
    <Heading
      title="Share some basics about your place"
      subtitle="What amenitis do you have?"
    />
    <Counter
      onChange={(value) => setInfo('guestCount', value)}
      value={guestCount}
      title="Guests"
      subtitle="How many guests do you allow?"
    />
    <hr />
    <Counter
      onChange={(value) => setInfo('roomCount', value)}
      value={roomCount}
      title="Rooms"
      subtitle="How many rooms do you have?"
    />
    <hr />
    <Counter
      onChange={(value) => setInfo('bathroomCount', value)}
      value={bathroomCount}
      title="Bathrooms"
      subtitle="How many bathrooms do you have?"
    />
  </div>
);

export default InfoStep;