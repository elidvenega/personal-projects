import { recipes } from "./data.js";

export default function RecipeList() {
  const recipeItems = recipes.map((item) => (
    <div key={item.id}>
      <h2>{item.name}</h2>
      <ul>
        {item.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  ));

  console.log(recipeItems);
  return (
    <div>
      <h1>Recipes</h1>
      <ul>{recipeItems}</ul>
    </div>
  );
}
