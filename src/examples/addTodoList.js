import firebase from "../firebase";
import { v4 as uuidv4 } from "uuid";

const db = firebase.firestore();
var toDoRef = db.collection("todos");
const setTodoData = () => {
  toDoRef.doc("1").set({
    Title: "Make Kanban",
    Urgency: 2,
    createdBy: "Merlin",
    summary: "Lorem words make craxy things happen randpm words",
  });
  toDoRef.doc("2").set({
    Title: "Pomodoro TImer",
    Urgency: 1,
    createdBy: "Umar",
    summary: "Lorem words make craxy things happen randpm words",
  });
  toDoRef.doc("3").set({
    Title: "Style Sheet",
    Urgency: 1,
    createdBy: "Kate",
    summary: "Lorem words make craxy things happen randpm words",
  });
  toDoRef.doc("4").set({
    Title: "Routing",
    Urgency: 1,
    createdBy: "Tania",
    summary: "Lorem words make craxy things happen randpm words",
  });
};

// const getData = () => {
//   db.collection("cities")
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         console.log(`${doc.id.country} => ${doc.data()}`);
//       });
//     });
// };

// // setData();
export default setTodoData;
