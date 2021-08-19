import React, { useState, useEffect } from "react";
import firebase from "../firebase";
const db = firebase.firestore();
const RealtimeUpdate = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("cities").onSnapshot((snap) => {
      const data = snap.docs.map((doc) => doc.data());
      setData(data);
      console.log(data);
    });

    //remember to unsubscribe from your realtime listener on unmount or you will create a memory leak
    return () => unsubscribe();
  }, []);
  return <div></div>;
};

export default RealtimeUpdate;
