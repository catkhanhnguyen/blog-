import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import EditRecipeForm from '../Components/EditRecipeForm';

function EditRecipe() {
  const baseUrl = '/recipes';
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get(`${baseUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      const { tags, mealTypes, ...data } = response.data;
      const tagIds = tags.map(tag => tag.id);
      const mealTypeIds = Array.isArray(mealTypes) ? mealTypes.map(mealType => mealType.id) : [];
      setFormData({ ...data, tagIds, mealTypeIds });
    })
    .catch(error => {
      console.error('Error fetching recipe:', error);
    });

  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    
    const ingredientsValue = Array.isArray(formData.ingredients) ? formData.ingredients.join('\n') : formData.ingredients;
    const mealTypeIdsArray = Array.isArray(formData.mealTypeIds) ? formData.mealTypeIds : formData.mealTypeIds.split(',').map(Number);
    const tagIdsArray = Array.isArray(formData.tagIds) ? formData.tagIds : formData.tagIds.split(',').map(Number);
    
    axios.put(`${baseUrl}/${id}`, { ...formData, ingredients: ingredientsValue, mealTypeIds: mealTypeIdsArray, tagIds: tagIdsArray }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      console.log('Recipe updated successfully:', res.data);
      navigate(`/posts/${id}`);
    })
    .catch(error => {
      console.error('Error updating recipe:', error);
    });
  };
  
  
  

  const handleCancel = () => {
    navigate(-1);
  };

  if (!formData) {
    return <div>Loading...</div>;
  }
  if (!formData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='montaga-regular mb-16'>
      <EditRecipeForm
        handleSubmit={handleSubmit}
        formData={formData}
        handleChange={handleChange}
        handleCancel={handleCancel}
      />
    </div>
  );
}

export default EditRecipe;