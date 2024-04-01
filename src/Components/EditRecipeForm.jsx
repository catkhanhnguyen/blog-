import PropTypes from 'prop-types';

function EditRecipeForm({ handleSubmit, formData, handleChange, handleCancel, errorMessage }) {
  const {
    name,
    ingredients,
    instructions,
    prepTimeMinutes,
    cookTimeMinutes,
    servings,
    difficulty,
    cuisine,
    caloriesPerServing,
    tagIds,
    mealTypeIds,
    image
  } = formData;

  const ingredientsValue = Array.isArray(ingredients) ? ingredients.join('\n') : ingredients;
  const instructionsValue = Array.isArray(instructions) ? instructions.join('\n') : instructions;

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-[36px] font-semibold mb-4 text-center">Edit Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-[16px] font-medium text-gray-700">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md" required />
        </div>

        <div>
          <label htmlFor="ingredients" className="block text-[16px] font-medium text-gray-700">Ingredients:</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={ingredientsValue}
            onChange={handleChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="instructions" className="block text-[16px] font-medium text-gray-700">Instructions:</label>
          <textarea
            id="instructions"
            name="instructions"
            value={instructionsValue}
            onChange={handleChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="prepTimeMinutes" className="block text-[16px] font-medium text-gray-700">Prep Time (Minutes):</label>
            <input type="number" id="prepTimeMinutes" name="prepTimeMinutes" value={prepTimeMinutes} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md" required />
          </div>

          <div>
            <label htmlFor="cookTimeMinutes" className="block text-[16px] font-medium text-gray-700">Cook Time (Minutes):</label>
            <input type="number" id="cookTimeMinutes" name="cookTimeMinutes" value={cookTimeMinutes} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md" required />
          </div>
        </div>

        <div>
          <label htmlFor="servings" className="block text-[16px] font-medium text-gray-700">Servings:</label>
          <input type="number" id="servings" name="servings" value={servings} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md" required />
        </div>

        <div>
          <label htmlFor="difficulty" className="block text-[16px] font-medium text-gray-700">Difficulty:</label>
          <select id="difficulty" name="difficulty" value={difficulty} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md" required>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div>
          <label htmlFor="cuisine" className="block text-[16px] font-medium text-gray-700">Cuisine:</label>
          <input type="text" id="cuisine" name="cuisine" value={cuisine} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md" required />
        </div>

        <div>
          <label htmlFor="caloriesPerServing" className="block text-[16px] font-medium text-gray-700">Calories Per Serving:</label>
          <input type="number" id="caloriesPerServing" name="caloriesPerServing" value={caloriesPerServing} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md" required />
        </div>

        <div>
          <label htmlFor="image" className="block text-[16px] font-medium text-gray-700">Image URL:</label>
          <input type="text" id="image" name="image" value={image} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md" required />
        </div>

        <div>
        <label htmlFor="tagIds" className="block text-[16px] font-medium text-gray-700">Tag IDs:</label>
          <input
            type="text"
            id="tagIds"
            name="tagIds"
            value={Array.isArray(tagIds) ? tagIds.join(',') : tagIds}
            onChange={handleChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md"
            required
          />

        </div>

        <div>
          <label htmlFor="mealTypeIds" className="block text-[16px] font-medium text-gray-700">Meal Type IDs:</label>
          <input
            type="text"
            id="mealTypeIds"
            name="mealTypeIds"
            value={Array.isArray(mealTypeIds) ? mealTypeIds.join(',') : mealTypeIds}
            onChange={handleChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md"
            required
          />
        </div>

        {errorMessage && <div className="text-red-500">{errorMessage}</div>}

        <div className="flex justify-between gap-16">
          <button type="submit" className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200">Save</button>
          <button type="button" onClick={handleCancel} className="px-6 py-2 bg-gray-400 text-white font-semibold rounded hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-200">Cancel</button>
        </div>
      </form>
    </div>
  );
}

EditRecipeForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};

export default EditRecipeForm;
