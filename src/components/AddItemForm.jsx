import { useState, useRef, useEffect } from "react";
import {
  StyledFormDiv,
  StyledInput,
  StyledLabel,
  StyledButton,
} from "../styles/general";

const AddItemForm = ({ addItemToUI }) => {
  const defaultInputValues = {
    id: Math.floor(Math.random() * 10001),
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

    //get items and post new item
    const addItem = async (newItem) => {
      try {
        const response = await fetch(catsUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newItem),
        });
        const data = await response.json();
        console.log("addItem-data:", data);
        setError(null);
      } catch (error) {
        console.log("add item error:", error);
        setError("Ooops!! Could not fetch and add data...");
      }
    };
    addItem(newItem);
    addItemToUI(newItem);
    setFormData(defaultInputValues);
  };

  useEffect(() => {
    // console.log("AddItemForm: ");
  }, []);

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
        <StyledButton onClick={focusInput} $bgGreen="true">
          Add Cat
        </StyledButton>
      </section>
    </form>
  );
};

export default AddItemForm;
