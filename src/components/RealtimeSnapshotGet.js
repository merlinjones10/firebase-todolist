import React, { useState, useEffect, Fragment } from "react";
import firebase from "../firebase";
import { v4 as uuidv4 } from "uuid";

const RealtimeSnapshotGet = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const ref = firebase.firestore().collection("Todo");
  //
  // REALTIME GET
  function getSchools() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setTodos(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getSchools();
    // eslint-disable-next-line
  }, []);
  //DELETE FUNCTION
  function deleteTodo(todo) {
    ref
      .doc(todo.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }
  //
  return (
    <Fragment>
      <h1>Todo list (SNAPSHOT)</h1>

      {loading ? <h1>Loading...</h1> : null}
      {todos.map((todo) => (
        <div className="school" key={todo.id}>
          <h2>{todo.Title}</h2>
          <p>{todo.Urgency}</p>
          <button onClick={() => deleteTodo(todo)}>X Delete X</button>
        </div>
      ))}
    </Fragment>
  );
};

export default RealtimeSnapshotGet;
