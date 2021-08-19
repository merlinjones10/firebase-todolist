//To create or overwrite a single document, use the set() method:

import firebase from "../firebase";

const db = firebase.firestore();

const addData = () => {
  db.collection("cities")
    .doc("BR")
    .set({
      name: "Birmingham",
      state: "WM",
      country: "UK",
    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
};

export default addData;

//If the document does not exist, it will be created. If the document does exist, its contents will be overwritten with the newly provided data, unless you specify that the data should be merged into the existing document, as follows:
// var cityRef = db.collection("cities").doc("BJ");

// var setWithMerge = cityRef.set(
//   {
//     capital: true,
//   },
//   { merge: true }
// );
