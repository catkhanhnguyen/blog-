import { useNavigate } from "react-router-dom";
import AddUserForm from "../Components/AddUserForm";
import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../Layout/Layout";

function AddUser() {
  const baseUrl = "/register";
  const navigate = useNavigate();

  const initialFormData = {
    username: "",
    password: "",
    roles: [],
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorToast, setErrorToast] = useState("");

  useEffect(() => {
    if (errorToast) {
      const timer = setTimeout(() => {
        setErrorToast("");
      }, 1000); 
      return () => clearTimeout(timer);
    }
  }, [errorToast]);

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

    if (modifiedFormData.roles.length === 0) {
      setErrorToast("Please assign at least 1 role to user");
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post(baseUrl, modifiedFormData, config)
      .then((res) => {
        console.log("User added successfully:", res.data);
        setFormData(initialFormData);
        navigate("/");
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setErrorToast("Username is already exists.");
        } else {
          setErrorMessage("Error: ", error);
        }
      });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const displayToast =
    errorToast && (
      <div className="absolute bottom-4 left-4 bg-red-500 text-white py-2 px-4 rounded-md">
        {errorToast}
      </div>
    );

  return (
    <div>
      <Layout>
        {displayToast}
        <AddUserForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleCancel={handleCancel}
          errorMessage={errorMessage}
          formData={formData}
          errorToast={errorToast}
        />
      </Layout>
    </div>
  );
}

export default AddUser;
