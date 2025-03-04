import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "/src/UserInputs.css";
import Button from "../button/Button";

const UserInputs = ({ onSubmit = () => {} }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    postalCode: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(formData).some((value) => value.trim() === "")) {
      alert("Alla fält måste fyllas i för att kunna gå vidare!.");
      return;
    }

    console.log("Form submitted, navigating to confirmation");
    onSubmit(formData);
    navigate("/confirmation", { state: { customerData: formData } });
  };

  const handleContinueShopping = () => {
    navigate("/products");
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2>Leverans- och Fakturaadress</h2>

      <label>Namn</label>
      <input
        type="text"
        name="name"
        placeholder="Namn"
        required
        value={formData.name}
        onChange={handleChange}
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={handleChange}
      />

      <label>Adress</label>
      <input
        type="text"
        name="address"
        placeholder="Adress"
        required
        value={formData.address}
        onChange={handleChange}
      />

      <label>Postnummer</label>
      <input
        type="text"
        name="postalCode"
        placeholder="Postnummer"
        required
        value={formData.postalCode}
        onChange={handleChange}
      />

      <label>Postadress</label>
      <input
        type="text"
        name="city"
        placeholder="Postadress"
        required
        value={formData.city}
        onChange={handleChange}
      />

      <div className="button-container">
        <Button
          className="greyButton"
          onClick={handleContinueShopping}
          to="/products"
        >
          Fortsätt handla
        </Button>

        <Button className="redButton" onClick={handleSubmit} to="/">
          Bekräfta
        </Button>
      </div>
    </form>
  );
};

export default UserInputs;
