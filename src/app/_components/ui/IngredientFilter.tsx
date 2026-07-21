import { IngredientListTags } from "@/app/_types/RecipeTypes";
import IngredientFilterCard from "./IngredientFilterCard";
import { ingredientFilterTags } from "@/app/_data/IngredientListTags";

function IngredientFilter() {
  return (
    <>
      {ingredientFilterTags.map((item) => (
        <IngredientFilterCard item={item} key={item.type} />
      ))}
    </>
  );
}

export default IngredientFilter;
