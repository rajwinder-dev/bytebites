"use client";
import { useGUIState } from "../../_context/GUIStateProvider";
import IngredientFilter from "../ui/IngredientFilter";
import { useRecipeData } from "@/app/_context/RecipeDataContext";
import { useEffect, useState } from "react";
import Input from "../ui/Input";
import { IoDiamondOutline } from "react-icons/io5";
import { SecondaryButton } from "../ui/Buttons";

function IngredientPanel() {
  const { searchPanelHidden } = useGUIState();
  const { generateRecipe, status, } = useRecipeData();
  const [clickStatus, setClickStatus] = useState(false);
  const recipeCost = 20; // TODO: replace with actual cost value/source

  useEffect(() => {
    if (status === "success") setClickStatus(true);
  }, [status]);

  return (
    <div
      className={`absolute bottom-0 right-0 top-[3rem] bg-natural-cream md:relative md:top-0 ${searchPanelHidden || "border-l-2 border-accent"}`}
    >
      <div className="h-[calc(100vh-3rem)] overflow-y-scroll md:h-[calc(100vh-7.1rem)]">
        {searchPanelHidden || (
          <div className={`w-96 p-4`}>
            <h2 className="pb-0 text-center text-2xl">Filter by Ingredients</h2>
            <Input placeHolder="add Ingredient" className="w-full p-2" />
            <IngredientFilter />
          </div>
        )}
      </div>

      {searchPanelHidden || (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <SecondaryButton
            className="w-48"
            disabled={status === "pending"}
            onClick={generateRecipe}
          >
            {status === "pending" ? (
              "take a while..."
            ) : (
              <span className="flex items-center justify-center gap-1">
                Make A.I recipe <IoDiamondOutline /> {recipeCost}
              </span>
            )}
          </SecondaryButton>
        </div>
      )}
    </div>
  );
}
export default IngredientPanel;
