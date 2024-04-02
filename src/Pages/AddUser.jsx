import { useNavigate } from "react-router-dom";
import AddUserForm from "../Components/AddUserForm";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useState, useEffect } from "react";
import axios from "axios";

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
      }, 1000); // 1 giây
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
      return; // Không gửi yêu cầu nếu không có vai trò được chọn
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
        if (error.response.status === 403) {
          setErrorToast("Username is already exists.");
        } else if (error.response) {
          setErrorMessage(error.response.data.message);
        } else if (error.request) {
          setErrorMessage("Không nhận được phản hồi từ máy chủ. Vui lòng thử lại sau.");
        } else {
          setErrorMessage("Đã xảy ra lỗi khi gửi yêu cầu. Vui lòng thử lại sau.");
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
    <div className="montaga-regular">
      <Header />
      {displayToast}
      <AddUserForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleCancel={handleCancel}
        errorMessage={errorMessage}
        formData={formData}
        errorToast={errorToast}
      />
      <Footer />
    </div>
  );
}

export default AddUser;
