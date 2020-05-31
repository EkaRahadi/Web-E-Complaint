import React from "react";
import StudentImg from "../../images/student-images.jpg";
import "./Form.css";

const Form = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onButtonClick();
    event.target.reset();
  };

  const handleChange = (event) => {
    props.handleFormChange(event);
  };

  return (
    <div className="container-form">
      <div className="form-add-keluhan">
        <form onSubmit={handleSubmit}>
          <label htmlFor="nim">NIM</label>
          <input
            type="text"
            name="nim"
            placeholder="Masukkan NIM"
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Masukkan Email"
            onChange={handleChange}
            required
          />

          <label htmlFor="keluhan">Masukkan keluhan anda disini :</label>
          <textarea
            name="keluhan"
            id="body-keluhan"
            cols="30"
            rows="10"
            onChange={handleChange}
            required
          ></textarea>

          <input type="submit" value="Kirim" />
        </form>
      </div>
      <img className="student-img" src={StudentImg} alt="student-img" />
    </div>
  );
};

export default Form;
