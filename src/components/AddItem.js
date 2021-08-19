import React, { useState } from "react";
import firebase from "../firebase";
import { v4 as uuidv4 } from "uuid";

const AddItem = () => {
  const ref = firebase.firestore().collection("Todo");
  const [Title, setTitle] = useState("");
  const [Urgency, setUrgency] = useState(3);

  function addTodo(newTodo) {
    ref
      .doc(newTodo.id)
      .set(newTodo)
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      {/* <h1>add tsk</h1> */}
      <div className="inputBox">
        <h3>Add new</h3>
        <input type="text" value={Title} onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="Urgency"> Urgency </label>
        <select name="Urgency" id="Urgency" onChange={(e) => setUrgency(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={() => addTodo({ Title, id: uuidv4(), Urgency })}>Submit</button>
      </div>
    </>
  );
};

export default AddItem;
