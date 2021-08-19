import firebase from "../firebase";
import React from "react";
///////////////////////////
//NOT USING SNAPSHOT BUT UPDATING DOM WITH DATA
const DataSnapshot = () => {
  const [population, setPopulation] = React.useState(0);
  const db = firebase.firestore();

  const docRef = db.collection("cities").doc("SF");
  const onClickUpdatePopulation = () => {
    docRef.update({ population: 120 });
  };
  React.useEffect(() => {
    const fetchData = () => {
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log("Document data:", doc.data().population);
            setPopulation(doc.data().population);
            // docRef.update({ population: 200 });
          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    };
    fetchData();
  });
  return (
    <div>
      <p>Hellllo</p>
      <p>{population}</p>
      <button onClick={onClickUpdatePopulation}>Update population</button>
    </div>
  );
};
export default DataSnapshot;

// https://stackoverflow.com/questions/59944658/which-react-hook-to-use-with-firestore-onsnapshot
