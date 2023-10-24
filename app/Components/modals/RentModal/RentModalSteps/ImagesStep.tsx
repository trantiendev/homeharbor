import Heading from "@/app/Components/Heading";

interface ImagesStepProps {

}

const ImagesStep: React.FC<ImagesStepProps> = ({

}) => (
  <div className="flex flex-col gap-8">
    <Heading
      title="Add a photo of your place"
      subtitle="Show guests what your place looks like!"
    />
  </div>
);

export default ImagesStep;