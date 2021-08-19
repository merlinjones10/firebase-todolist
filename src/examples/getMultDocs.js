//You can also retrieve multiple documents with one request by querying documents in a collection. For example, you can use where() to query for all of the documents that meet a certain condition, then use get() to retrieve the results:

import firebase from "../firebase";
const db = firebase.firestore();
const getMultDocs = () => {
  db.collection("cities")
    .where("capital", "==", true)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data().name);
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
};

export default getMultDocs;

// In addition, you can retrieve all documents in a collection by omitting the where() filter entirely:
// E.G ->

// db.collection("cities")
//   .get()
//   .then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, " => ", doc.data());
//     });
//   });
