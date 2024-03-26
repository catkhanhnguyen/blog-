interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  caloriesPerServing: number;
  tagIds: number[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealTypeIds: number[];
}

export default Recipe;
