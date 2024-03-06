import { useState, useRef } from "react";
import {
  StyledFormDiv,
  StyledInput,
  StyledLabel,
  StyledButton,
} from "../styles/general";

const AddItemForm = ({ addItemToUI }) => {
  const defaultInputValues = {
    id: Math.floor(Math.random() * 10001), //random id
    date: new Date().toJSON().slice(0, 10),
    name: "",
    goOutside: true,
    foundHome: false,
  };
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState(defaultInputValues);

  const catsUrl = "http://localhost:9000/cats";

  const inputText = useRef();
  const focusInput = () => {
    inputText.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      ...formData,
    };

    //add item to db
    const addItem = () => {
      fetch(catsUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      })
        .then(() => {
          //upadate UI since list and add-form on same page
          addItemToUI(newItem);
          setFormData(defaultInputValues);
          setError(null);
        })
        .catch((err) => console.log("add item error:", err.message));
    };

    addItem();
  };

  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit}>
      <StyledFormDiv>
        {error && <p className="error-message">{error}</p>}
        <StyledLabel>
          Name:
          <StyledInput
            type="text"
            id="name"
            ref={inputText}
            required
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />{" "}
        </StyledLabel>
        <div>
          <StyledLabel>
            <input
              type="checkbox"
              id="goOutside"
              checked={formData.goOutside}
              onChange={() => {
                setFormData({
                  ...formData,
                  goOutside: !formData.goOutside,
                });
              }}
            />
            <span>Wants to go outside</span>
          </StyledLabel>
        </div>
      </StyledFormDiv>
      <section style={{ width: "100%", textAlign: "right" }}>
        <StyledButton onClick={focusInput}>Add Cat</StyledButton>
      </section>
    </form>
  );
};

export default AddItemForm;
