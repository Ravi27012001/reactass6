import React, { useContext } from "react";
import { store } from "./detail";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./add.css";

const AddStudent = () => {
  const [Name, setName] = useState("");

  const [Age, setAge] = useState("");

  const [Course, setCourse] = useState("");

  const [Batch, setBatch] = useState("");

  const [student, setStudent] = useContext(store);

  const ChangeHandler1 = (e) => {
    setName(e.target.value);
  };
  const ChangeHandler2 = (e) => {
    setAge(e.target.value);
  };
  const ChangeHandler3 = (e) => {
    setCourse(e.target.value);
  };
  const ChangeHandler4 = (e) => {
    setBatch(e.target.value);
  };

  const SubmitHandler = () => {
    setStudent([
      ...student,
      {
        Name: Name,
        Age: Age,
        Course: Course,
        Batch: Batch,
        id: new Date().getTime().toString(),
      },
    ]);
  };
  return (
    <div>
      <div className="class10">
        <label>Name:</label>
        <input
          id="name"
          className="class11"
          type="text"
          name="name"
          value={Name}
          onChange={ChangeHandler1}
        />{" "}
        <br></br><br></br>
        <label>Age:</label>
        <input
          id="age"
          className="class11"
          type="text"
          name="age"
          value={Age}
          onChange={ChangeHandler2}
        /><br></br><br></br>
        <label>Course:</label>
        <input
          id="course"
          className="class11"
          type="text"
          name="course"
          value={Course}
          onChange={ChangeHandler3}
        /><br></br><br></br>
        <label>Batch:</label>
        <input
          id="batch"
          className="class11"
          type="text"
          name="batch"
          value={Batch}
          onChange={ChangeHandler4}
        />
      </div>
<br></br><br></br><br></br><br></br>
      <div>
       
        <Link to="/student" className="class12" onClick={SubmitHandler}>
          Submit
        </Link> <br></br><br></br>
        <Link to="/student" className="class12">
          Cancel
        </Link>
      </div>
    </div>
  );
};
export default AddStudent;
