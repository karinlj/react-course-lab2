import "./AddItemForm.scss";
import { useState, useRef } from "react";
import SubmitButton from "../SubmitButton/SubmitButton";

const AddItemForm = ({ addItem }) => {
  const defaultInputValues = {
    name: "",
    goOutside: true,
    foundHome: false,
  };

  const [formData, setFormData] = useState(defaultInputValues);

  const inputText = useRef();
  const focusInput = () => {
    inputText.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.random(),
      name: formData.name,
      goOutside: formData.goOutside,
      foundHome: formData.foundHome,
    };
    addItem(newItem);
    setFormData(defaultInputValues);
  };

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            id="name"
            ref={inputText}
            required
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />{" "}
        </label>
        <br />
        <div>
          <label>
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
          </label>
        </div>
      </div>
      <section className="btn-section">
        <SubmitButton handleClick={focusInput} />
      </section>
    </form>
  );
};

export default AddItemForm;
