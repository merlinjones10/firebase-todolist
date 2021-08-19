//The following example shows how to retrieve the contents of a single document using get():

import firebase from "../firebase";
const db = firebase.firestore();
var docRef = db.collection("cities").doc("SF");

const readDocument = () => {
  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data().population);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
};

export default readDocument;
