import { useState } from 'react';
import AddRecipeForm from '../Components/AddRecipeForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Toast from '../Components/Toast';
import Layout from '../Layout/Layout';


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
  const [toastMessage, setToastMessage] = useState('');

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

    const token = localStorage.getItem('token');

    if (!token) {
      console.error('Token not found. Redirecting to login page...');
      navigate('/login');
      return;
    }

    if (modifiedFormData.name == '') {
      setToastMessage('Name must not be empty');
      return;
    }


    if (modifiedFormData.prepTimeMinutes < 0) {
      setToastMessage('Prep Time must not be negative');
      return;
    }

    if (modifiedFormData.cookTimeMinutes < 0) {
      setToastMessage('Cook Time must not be negative');
      return;
    }

    if (modifiedFormData.servings < 0) {
      setToastMessage('Servings must not be negative');
      return;
    }

    if (modifiedFormData.ingredients == '') {
      setToastMessage('Ingredients must not be empty');
      return;
    }

    if (modifiedFormData.instructions == '') {
      setToastMessage('Instructions must not be empty');
      return;
    }

    if (modifiedFormData.cuisine == '') {
      setToastMessage('Cuisine must not be empty');
      return;
    }

    if (modifiedFormData.image == '') {
      setToastMessage('Image must not be empty');
      return;
    }

    axios.post(baseUrl, modifiedFormData, {headers: {Authorization: `Bearer ${token}`}})
      .then(res => {
        console.log('Recipe added successfully:', res.data);
        navigate('/');
      })
      .catch(error => {
        if (error.response) {
          console.log("Error", error)
        }
      });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div>
      <Layout>
        <Toast toastMessage={toastMessage} setToastMessage={setToastMessage}/>
        <AddRecipeForm
          handleSubmit={handleSubmit}
          formData={formData}
          handleChange={handleChange}
          handleCancel={handleCancel}
        />
      </Layout>
    </div>
  );
}

export default AddRecipe;
