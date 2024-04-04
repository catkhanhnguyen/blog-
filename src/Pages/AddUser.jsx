import { useNavigate } from "react-router-dom";
import AddUserForm from "../Components/AddUserForm";
import { useState } from "react";
import axios from "axios";
import Layout from "../Layout/Layout";
import Toast from "../Components/Toast";

function AddUser() {
  const baseUrl = "/register";
  const navigate = useNavigate();

  const initialFormData = {
    username: "",
    password: "",
    roles: [],
  };

  const [formData, setFormData] = useState(initialFormData);
  const [toastMessage, setToastMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const modifiedFormData = { ...formData };

    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token not found. Redirecting to login page...");
      navigate("/login");
      return;
    }

    if (modifiedFormData.username === '') {
      setToastMessage("Username must not be empty");
      return;
    }

    if (modifiedFormData.password === '') {
      setToastMessage("Password must not be empty");
      return;
    }

    if (modifiedFormData.roles.length === 0) {
      setToastMessage("Please assign at least 1 role to user");
      return;
    }


    axios
      .post(baseUrl, modifiedFormData, {headers: {Authorization: `Bearer ${token}`}})
      .then((res) => {
        console.log("User added successfully:", res.data);
        setFormData(initialFormData);
        navigate("/");
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setToastMessage("Username is already exists.");
        } else {
          setToastMessage("Error: ", error);
        }
      });
  };

  const handleCancel = () => {
    navigate(-1);
  };


  return (
    <div>
      <Layout>
        <Toast toastMessage={toastMessage} setToastMessage={setToastMessage} />
          <AddUserForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleCancel={handleCancel}
            formData={formData}
          />
      </Layout>
    </div>
  );
}

export default AddUser;
