import { useState } from 'react';
import Header from '../Components/Header';
import AddRecipeForm from '../Components/AddRecipeForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddRecipe() {
  const baseUrl = '/recipes';
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    ingredients: [],
    instructions: [],
    prepTimeMinutes: 0,
    cookTimeMinutes: 0,
    servings: 0,
    difficulty: '',
    cuisine: '',
    caloriesPerServing: 0,
    tagIds: [],
    userId: 0,
    image: '',
    rating: 0,
    reviewCount: 0,
    mealTypeIds: [],
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const modifiedFormData = { ...formData };
    modifiedFormData.ingredients = modifiedFormData.ingredients.join('\n');
    modifiedFormData.instructions = modifiedFormData.instructions.join('\n');

    axios.post(baseUrl, modifiedFormData)
      .then(res => {
        console.log('Recipe added successfully:', res.data);
        setErrorMessage('');
        setFormData({
          name: '',
          ingredients: [],
          instructions: [],
          prepTimeMinutes: 0,
          cookTimeMinutes: 0,
          servings: 0,
          difficulty: '',
          cuisine: '',
          caloriesPerServing: 0,
          tagIds: [],
          userId: 0,
          image: '',
          rating: 0,
          reviewCount: 0,
          mealTypeIds: [],
        });

        navigate('/');
      })
      .catch(error => {
        if (error.response) {
          setErrorMessage(error.response.data.message);
        } else if (error.request) {
          setErrorMessage('Không nhận được phản hồi từ máy chủ. Vui lòng thử lại sau.');
        } else {
          setErrorMessage('Đã xảy ra lỗi khi gửi yêu cầu. Vui lòng thử lại sau.');
        }
      });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className='montaga-regular mb-16'>
      <Header />
      <AddRecipeForm
        handleSubmit={handleSubmit}
        formData={formData}
        handleChange={handleChange}
        errorMessage={errorMessage}
        handleCancel={handleCancel}
      />
    </div>
  );
}

export default AddRecipe;