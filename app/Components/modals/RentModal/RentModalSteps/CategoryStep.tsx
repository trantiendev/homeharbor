import Heading from "@/app/Components/Heading";
import CategoryInput from "@/app/Components/inputs/CategoryInput";
import { categories } from "@/app/Components/navbar/Categories";

interface CategoryStepProps {
  category: string
  setCategory: (id: string, value: any) => void
}

const CategoryStep: React.FC<CategoryStepProps> = ({
  setCategory,
  category
}) => (
  <div className="flex flex-col gap-8">
    <Heading
      title="Which of these best describes your place?"
      subtitle="Pick a category"
    />
    <div
      className="
        grid 
        grid-cols-1 
        md:grid-cols-2 
        gap-3
        max-h-[50vh]
        overflow-y-auto
      "
    >
      {categories.map((item) => (
        <div key={item.label} className="col-span-1">
          <CategoryInput
            onClick={(category) => setCategory('category', category)}
            selected={category === item.label}
            label={item.label}
            icon={item.icon}
          />
        </div>
      ))}
    </div>
  </div>
);

export default CategoryStep;