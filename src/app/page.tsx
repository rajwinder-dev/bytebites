import IngredientPanel from "./_components/layout/IngredientPanel";
import ExplorePage from "./_components/layout/ExplorePage";
export default async function page() {
  return (
    <div className="grid grid-cols-[1fr_auto]">
      <ExplorePage />
      <IngredientPanel  />
    </div>
  );
}

// function groupIngredientsByType(ingredientsDB: IngredientListDB[]) {
//   return Object.entries(
//     ingredientsDB.reduce(
//       (acc: Record<string, string[]>, item) => {
//         const { type, ingredient } = item;
//         if (!acc[type]) {
//           acc[type] = [];
//         }
//         acc[type].push(ingredient);
//         return acc;
//       },
//       {} as Record<string, string[]>,
//     ),
//   ).map(([type, ingredients]) => ({ type, ingredients }));
// }
