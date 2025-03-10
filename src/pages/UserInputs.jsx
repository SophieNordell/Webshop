import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "/src/UserInputs.css";
import Button from "../components/Button";

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

      <label htmlFor="name">Namn</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Namn"
        required
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="adress">Adress</label>
      <input
        id="adress"
        type="text"
        name="address"
        placeholder="Adress"
        required
        value={formData.address}
        onChange={handleChange}
      />

      <label htmlFor="postnummer">Postnummer</label>
      <input
        id="postnummer"
        type="text"
        name="postalCode"
        placeholder="Postnummer"
        required
        value={formData.postalCode}
        onChange={handleChange}
      />

      <label htmlFor="postadress">Postadress</label>
      <input
        id="postadress"
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
          Slutför köp
        </Button>
      </div>
    </form>
  );
};

export default UserInputs;
