import React from "react";
import PropTypes from "prop-types";

const DateDisplay = ({ date, deleteDate }) => {
  const { pet, owner, dateD, hour, description, id } = date;
  return (
    <div className="cita">
      <p>
        Pet: <span>{pet}</span>
      </p>
      <p>
        Owner: <span>{owner}</span>
      </p>
      <p>
        Date: <span>{dateD}</span>
      </p>
      <p>
        Hour: <span>{hour}</span>
      </p>
      <p>
        Description: <span>{description}</span>
      </p>

      <button
        className="button eliminar u-full-width"
        onClick={() => deleteDate(id)}
      >
        Delete &times;
      </button>
    </div>
  );
};

DateDisplay.propTypes = {
  date: PropTypes.object.isRequired,
  deleteDate: PropTypes.func.isRequired
};

export default DateDisplay;
