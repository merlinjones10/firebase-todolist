import React from "react";
// import "./App.css";
import firebase from "./firebase";
import { FirestoreProvider } from "react-firestore";
import { v4 as uuidv4 } from "uuid";
// import setData from "./citiesExample";
// import readDocument from "./getADocument";
// import getMultDocs from "./getMultDocs";
import DataSnapshot from "./components/DataSnapshot";
// import addData from "./addData";
// import setTodoData from "./addTodoList";
import TodoList from "./components/TodoList";
import RealtimeUpdate from "./components/RealtimeUpdate";
import AddItem from "./components/AddItem";
import RealtimeSnapshotGet from "./components/RealtimeSnapshotGet";
//
//
//
function App() {
  // setTodoData();
  // console.log(firebase.firestore.Timestamp.fromDate(new Date("December 10, 1815")));
  // console.log(firebase.firestore.Timestamp.now())
  // console.log(uuidv4());
  // addData();
  // readDocument();
  // getMultDocs();

  const [tasks, setTasks] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("things").get();
      setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);
  return (
    <ul>
      <RealtimeSnapshotGet />
      <AddItem></AddItem>
      {/* <TodoList /> */}
      {tasks.map((task) => (
        <li>{task.name}</li>
      ))}
    </ul>
  );
}

export default App;
