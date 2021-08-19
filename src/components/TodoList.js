import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import { v4 as uuidv4 } from "uuid";

//
const TodoList = () => {
  const db = firebase.firestore();
  const [toDos, setTodos] = useState([]);
  //   const collectionRef = db.collection("cities");

  //
  useEffect(() => {
    const getTodoCollection = async () => {
      const data = await firebase.firestore().collection("Todo").get();
      // console.log(data.docs.map((doc) => ({ ...doc.data() })));
      setTodos(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getTodoCollection();
  }, []);
  //

  //
  return (
    <>
      {toDos.map((toDo) => {
        const { Title, Urgency, createdBy } = toDo;
        return (
          <div key={uuidv4()}>
            <h4>{Title}</h4>
            <p>
              Created by {createdBy}, Urgency {Urgency}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default TodoList;

// db.collection("cities").onSnapshot(
//   (snapshot) => {
//     // ...
//   },
//   (error) => {
//     // ...
//   }
// );
