import { useState } from 'react';
import Header from '../Components/Header';

function AddRecipe() {
  const [formData, setFormData] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    prepTimeMinutes: '',
    cookTimeMinutes: '',
    servings: '',
    difficulty: '',
    cuisine: '',
    caloriesPerServing: '',
    tagIds: [],
    userId: '',
    image: '',
    rating: '',
    reviewCount: '',
    mealTypeIds: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gửi dữ liệu formData lên server để tạo recipe mới
    console.log(formData);
    // Reset form sau khi submit thành công
    setFormData({
      name: '',
      ingredients: '',
      instructions: '',
      prepTimeMinutes: '',
      cookTimeMinutes: '',
      servings: '',
      difficulty: '',
      cuisine: '',
      caloriesPerServing: '',
      tagIds: [],
      userId: '',
      image: '',
      rating: '',
      reviewCount: '',
      mealTypeIds: [],
    });
  };

  return (
    <div className='montaga-regular mb-16'>
      <Header />
      <div className="max-w-lg mx-auto">
        <h2 className="text-[36px] font-semibold mb-4 text-center">Add New Recipe</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-[16px] font-medium text-gray-700">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md" required />
          </div>

          <div>
            <label htmlFor="ingredients" className="block text-[16px] font-medium text-gray-700">Ingredients:</label>
            <textarea id="ingredients" name="ingredients" value={formData.ingredients} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md h-32 resize-none" required />
          </div>

          <div>
            <label htmlFor="instructions" className="block text-[16px] font-medium text-gray-700">Instructions:</label>
            <textarea id="instructions" name="instructions" value={formData.instructions} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md h-32 resize-none" required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="prepTimeMinutes" className="block text-[16px] font-medium text-gray-700">Prep Time (Minutes):</label>
              <input type="number" id="prepTimeMinutes" name="prepTimeMinutes" value={formData.prepTimeMinutes} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md" required />
            </div>

            <div>
              <label htmlFor="cookTimeMinutes" className="block text-[16px] font-medium text-gray-700">Cook Time (Minutes):</label>
              <input type="number" id="cookTimeMinutes" name="cookTimeMinutes" value={formData.cookTimeMinutes} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md" required />
            </div>
          </div>

          <div>
            <label htmlFor="servings" className="block text-[16px] font-medium text-gray-700">Servings:</label>
            <input type="number" id="servings" name="servings" value={formData.servings} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md" required />
          </div>

          <div>
            <label htmlFor="difficulty" className="block text-[16px] font-medium text-gray-700">Difficulty:</label>
            <input type="text" id="difficulty" name="difficulty" value={formData.difficulty} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md" required />
          </div>

          <div>
            <label htmlFor="cuisine" className="block text-[16px] font-medium text-gray-700">Cuisine:</label>
            <input type="text" id="cuisine" name="cuisine" value={formData.cuisine} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md" required />
          </div>

          <div>
            <label htmlFor="caloriesPerServing" className="block text-[16px] font-medium text-gray-700">Calories Per Serving:</label>
            <input type="number" id="caloriesPerServing" name="caloriesPerServing" value={formData.caloriesPerServing} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md" required />
          </div>

          <div>
            <label htmlFor="tagIds" className="block text-[16px] font-medium text-gray-700">Tag IDs:</label>
            <input type="text" id="tagIds" name="tagIds" value={formData.tagIds} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md" required />
          </div>

          <div>
            <label htmlFor="userId" className="block text-[16px] font-medium text-gray-700">User ID:</label>
            <input type="number" id="userId" name="userId" value={formData.userId} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md" required />
          </div>

          <div>
            <label htmlFor="image" className="block text-[16px] font-medium text-gray-700">Image URL:</label>
            <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md" required />
          </div>

          <div>
            <label htmlFor="rating" className="block text-[16px] font-medium text-gray-700">Rating:</label>
            <input type="number" id="rating" name="rating" value={formData.rating} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md" required />
          </div>

          <div>
            <label htmlFor="reviewCount" className="block text-[16px] font-medium text-gray-700">Review Count:</label>
            <input type="number" id="reviewCount" name="reviewCount" value={formData.reviewCount} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md" required />
          </div>

          <div>
            <label htmlFor="mealTypeIds" className="block text-[16px] font-medium text-gray-700">Meal Type IDs:</label>
            <input type="text" id="mealTypeIds" name="mealTypeIds" value={formData.mealTypeIds} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md" required />
          </div>

          <div>
            <button type="submit" className="w-full mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add Recipe</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRecipe;
