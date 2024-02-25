import { useState, useRef } from "react";
import SubmitButton from "./SubmitButton";
import styled from "styled-components";
import { colors, themeSettings } from "../styles/variables";

const StyledFormDiv = styled.div.attrs({
  className: "styled-form-div",
})`
  background-color: #fff;
  border-radius: ${themeSettings.themeBorderRadius};
  box-shadow: ${themeSettings.themeBoxShadow};
  line-height: 1.5rem;
  padding: 0.9rem 1.4rem;
  margin: 0;
  border-bottom: 1px solid ${colors.themeBorderColor};
  margin: 1rem 0;
`;

const StyledLabel = styled.label.attrs({
  className: "styled-label",
})`
  display: block;
  width: 100%;
  color: ${colors.themecolor};
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
`;

const StyledInput = styled.input.attrs({
  className: "styled-input",
})`
  width: 100%;
  padding-right: 0.5rem;
  padding: 0.7rem 0.5rem;
  border: none;
  border-bottom: 1px solid $themeBorderColor;
  font-size: 1rem;
`;

const AddItemForm = () => {
  const defaultInputValues = {
    id: Math.random(),
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

  const addItem = async (item) => {
    try {
      const response = await fetch(catsUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
      const data = await response.json();
      console.log("data:", data);
      setError(null);
    } catch (error) {
      console.log("error:", error);
      setError("Ooops!! Could not fetch data...");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      ...formData,
    };
    addItem(newItem);
    setFormData(defaultInputValues);
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
        <SubmitButton handleClick={focusInput} />
      </section>
    </form>
  );
};

export default AddItemForm;
