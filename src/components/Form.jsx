import React, { Fragment, useState } from "react";
import Input from "./Input";
import PropTypes from "prop-types";

import { v4 as uuid } from "uuid";

const Form = props => {
  const { addDate } = props;

  const [date, setDate] = useState({
    pet: "",
    owner: "",
    dateD: "",
    hour: "",
    description: ""
  });

  const [error, setError] = useState(false);

  //! event Functions
  const handleChange = event => {
    const { name, value } = event.target;
    setDate({
      ...date,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Validation
    if (
      pet.trim() === "" ||
      owner.trim() === "" ||
      dateD.trim() === "" ||
      hour.trim() === "" ||
      description.trim() === ""
    ) {
      setError(true);
      return;
    }

    //Asign Id
    setError(false);
    date.id = uuid();

    // create date
    addDate(date);

    //reiniciar el form
    setDate({ pet: "", owner: "", dateD: "", hour: "", description: "" });
  };

  const { pet, owner, dateD, hour, description } = date;

  return (
    <>
      <Fragment>
        <h2>Create a Date</h2>
        {/* Error handler */}
        {error ? (
          <p className="alerta-error">Ups! All field required!</p>
        ) : null}
        <form onSubmit={handleSubmit}>
          <Input
            label="Pet Name"
            type="text"
            name="pet"
            placeHolder="Insert a name"
            onChange={handleChange}
            value={pet}
          />
          <Input
            label="Pet Owner"
            type="text"
            name="owner"
            placeHolder="Insert a Name"
            onChange={handleChange}
            value={owner}
          />
          <Input
            label="Date"
            type="date"
            name="dateD"
            onChange={handleChange}
            value={dateD}
          />
          <Input
            label="Hour"
            type="time"
            name="hour"
            onChange={handleChange}
            value={hour}
          />
          <label>Symptom</label>
          <textarea
            className="u-full-width"
            name="description"
            onChange={handleChange}
            value={description}
          />
          <button type="submit" className="u-full-width button-primary">
            Add a Date
          </button>
        </form>
      </Fragment>
    </>
  );
};

// documenting the component

Form.propTypes = {
  addDate: PropTypes.func.isRequired
};

export default Form;
