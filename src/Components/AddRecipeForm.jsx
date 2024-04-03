import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function AddRecipeForm({ handleSubmit, formData, handleChange, handleCancel }) {
  const [ingredientList, setIngredientList] = useState(formData.ingredients);
  const [instructionList, setInstructionList] = useState(formData.instructions);
  
  useEffect(() => {
    setIngredientList(['']);
    setInstructionList(['']);
  }, []);

  const handleAddIngredient = () => {
    setIngredientList(prevList => [...prevList, '']);
  };

  const handleIngredientChange = (index, value) => {
    const newList = [...ingredientList];
    newList[index] = value;
    setIngredientList(newList);
    handleChange({
      target: {
        name: 'ingredients',
        value: newList
      }
    });
  };
  

  const handleAddInstruction = () => {
    setInstructionList(prevList => [...prevList, '']);
  };


  const handleInstructionChange = (index, value) => {
    const newList = [...instructionList];
    newList[index] = value;
    setInstructionList(newList);
    handleChange({
      target: {
        name: 'instructions',
        value: newList
      }
    });
  };

  const handleArrayChange = (event) => {
    const { name, value } = event.target;
    const arrayValue = value.split(',').map(item => item !== ''? Number(item.trim()): item);
    handleChange({ target: { name, value: arrayValue } });
  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    handleChange({
      target: {
        name,
        value
      }
    });
  };


  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-[36px] font-semibold mb-4 text-center">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-[16px] font-medium text-gray-700">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md"/>
        </div>

        <div>
          <label htmlFor="ingredients" className="block text-[16px] font-medium text-gray-700">Ingredients:</label>
          {ingredientList.map((ingredient, index) => (
            <input
              key={index}
              type="text"
              value={ingredient}
              onChange={(e) => handleIngredientChange(index, e.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md"
            />
          ))}
          <button type="button" onClick={handleAddIngredient} className="w-full mt-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">+</button>
        </div>
        
        <div>
          <label htmlFor="instructions" className="block text-[16px] font-medium text-gray-700">Instructions:</label>
          {instructionList.map((instructions, index) => (
            <input
              key={index}
              type="text"
              value={instructions}
              onChange={(e) => handleInstructionChange(index, e.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md"
            />
          ))}
          <button type="button" onClick={handleAddInstruction} className="w-full mt-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">+</button>
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
          <input type="number" id="servings" name="servings" value={formData.servings} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md"/>
        </div>

        <div>
          <label htmlFor="difficulty" className="block text-[16px] font-medium text-gray-700">Difficulty:</label>
          <select id="difficulty" name="difficulty" value={formData.difficulty} onChange={handleSelectChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md" required>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div>
          <label htmlFor="cuisine" className="block text-[16px] font-medium text-gray-700">Cuisine:</label>
          <input type="text" id="cuisine" name="cuisine" value={formData.cuisine} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md"/>
        </div>

        <div>
          <label htmlFor="caloriesPerServing" className="block text-[16px] font-medium text-gray-700">Calories Per Serving:</label>
          <input type="number" id="caloriesPerServing" name="caloriesPerServing" value={formData.caloriesPerServing} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md"/>
        </div>

        <div>
          <label htmlFor="image" className="block text-[16px] font-medium text-gray-700">Image URL:</label>
          <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md"/>
        </div>

        <div>
          <label htmlFor="tagIds" className="block text-[16px] font-medium text-gray-700">Tag IDs:</label>
          <input
            type="text"
            id="tagIds"
            name="tagIds"
            value={formData.tagIds.join(',')}
            onChange={handleArrayChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="mealTypeIds" className="block text-[16px] font-medium text-gray-700">Meal Type IDs:</label>
          <input
            type="text"
            id="mealTypeIds"
            name="mealTypeIds"
            value={formData.mealTypeIds.join(',')}
            onChange={handleArrayChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-[16px] p-2 border-gray-300 rounded-md"
          />
        </div>

        <div className="flex justify-between gap-16">
          <button type="submit" className="bg-black w-full mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add Recipe</button>
          <button type="button" onClick={handleCancel} className="w-full mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">Cancel</button>
        </div>
      </form>
    </div>
  )
}

AddRecipeForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
    prepTimeMinutes: PropTypes.number.isRequired,
    cookTimeMinutes: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    difficulty: PropTypes.string.isRequired,
    cuisine: PropTypes.string.isRequired,
    caloriesPerServing: PropTypes.number.isRequired,
    tagIds: PropTypes.arrayOf(PropTypes.number).isRequired,
    image: PropTypes.string.isRequired,
    mealTypeIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
};


export default AddRecipeForm