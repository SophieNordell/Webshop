import "/src/UserInputs.css";

const UserInputs = () => {
  return (
    <>
      <form className="user-form">
        <h2>Leverans- och Fakturaadress</h2>

        <label>Namn</label>
        <input type="text" placeholder="Namn" required />

        <label>Email</label>
        <input type="email" placeholder="Email" required />

        <label>Adress</label>
        <input type="text" placeholder="Adress" required />

        <label>Postnummer</label>
        <input type="text" placeholder="Postnummer" required />

        <label>Postadress</label>
        <input type="text" placeholder="Postadress" required />
      </form>

      <div className="user-inputs-footer">
        <p>Totalt SEK</p>

        <div className="button-container">
          <button className="return-button">Fortsätt handla</button>
          <button className="continue-button">Gå vidare</button>
        </div>
      </div>
    </>
  );
};

export default UserInputs;
