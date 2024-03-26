import { useState, useEffect } from 'react';
import Header from '../Components/Header';
import EditRecipeForm from '../Components/EditRecipeForm';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditRecipe() {
  const { id } = useParams();
  const baseUrl = `/recipes/${id}`;
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

  useEffect(() => {
    axios.get(baseUrl)
      .then(res => {
        setFormData(res.data);
      })
      .catch(error => {
        console.error('Error fetching recipe data:', error);
      });
  }, [baseUrl]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(baseUrl, formData)
      .then(res => {
        console.log('Recipe updated successfully:', res.data);
        setErrorMessage('');
        navigate(`/recipes/${id}`);
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
    navigate(`/recipes/${id}`);
  };

  return (
    <div className='montaga-regular mb-16'>
      <Header />
      {formData && (
        <EditRecipeForm
          handleSubmit={handleSubmit}
          formData={formData}
          handleChange={handleChange}
          errorMessage={errorMessage}
          handleCancel={handleCancel}
        />
      )}
    </div>
  );
}

export default EditRecipe;
