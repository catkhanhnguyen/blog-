import { useState } from 'react';
import Header from '../Components/Header';
import AddRecipeForm from '../Components/AddRecipeForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Toast from '../Components/Toast';


function AddRecipe() {
  const baseUrl = '/recipes';
  const navigate = useNavigate();

  const initialFormData = {
    name: '',
    ingredients: [],
    instructions: [],
    prepTimeMinutes: 0,
    cookTimeMinutes: 1,
    servings: 1,
    difficulty: 'Easy',
    cuisine: '',
    caloriesPerServing: 0,
    tagIds: [],
    image: '',
    mealTypeIds: [],
  }

  const [formData, setFormData] = useState(initialFormData);
  const [errorMessage, setErrorMessage] = useState('');
  const [toastMessage, setToastMessage] = useState(''); // State for toast message

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
    modifiedFormData.difficulty = formData.difficulty.toString();
    modifiedFormData.ingredients = modifiedFormData.ingredients.join('\n');
    modifiedFormData.instructions = modifiedFormData.instructions.join('\n');

    const token = localStorage.getItem('token');

    if (!token) {
      console.error('Token not found. Redirecting to login page...');
      navigate('/login');
      return;
    }

    // Validate prepTimeMinutes
    if (modifiedFormData.prepTimeMinutes < 0) {
      setToastMessage('Preptime must not be negative'); // Set toast message
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    axios.post(baseUrl, modifiedFormData, config)
      .then(res => {
        console.log('Recipe added successfully:', res.data);
        setFormData(initialFormData);
        setErrorMessage('');
        setToastMessage('Recipe added successfully'); // Set toast message

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
      <Toast message={toastMessage} /> 
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
