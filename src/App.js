import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import DateDisplay from "./components/DateDisplay";

function App() {
  // local storage
  let initialDates = JSON.parse(localStorage.getItem("dates"));
  if (!initialDates) {
    initialDates = [];
  }

  // all dates
  const [allDates, setAllDates] = useState(initialDates);

  const handleAllDates = newDate => {
    setAllDates([...allDates, newDate]);
    console.log(allDates);
  };

  const deleteDate = id => {
    const dateFilter = allDates.filter(date => date.id !== id);
    setAllDates(dateFilter);
  };

  useEffect(() => {
    if (initialDates) {
      localStorage.setItem("dates", JSON.stringify(allDates));
    } else {
      localStorage.setItem("dates", JSON.stringify([]));
    }
  }, [allDates, initialDates]);

  return (
    <div>
      <h1>Patients Manager</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form addDate={handleAllDates} />
          </div>
          <div className="one-half column">
            <h1>
              {allDates.length === 0 ? "Add a new date" : "Manage the Dates"}
            </h1>
            {allDates.map(date => (
              <DateDisplay date={date} key={date.id} deleteDate={deleteDate} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
