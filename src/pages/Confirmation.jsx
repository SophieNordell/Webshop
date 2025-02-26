import { useState, useEffect } from "react";

const Confirmation = ({ customerName, items = [], total }) => {
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    const randomOrderNumber = Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(randomOrderNumber);
  }, []);

  return (
    <>
      <div className="confirmation">
        <h3>Tack för att du är på nivån! {customerName}</h3>
        <p>Ordernummer: #{orderNumber}</p>

        <h3>Dina varor:</h3>
        <div className="confirmation-card">
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item.name} - {item.quantity} st
              </li>
            ))}
          </ul>
        </div>

        <p>Total: {total} USD</p>
      </div>
    </>
  );
};

export default Confirmation;
