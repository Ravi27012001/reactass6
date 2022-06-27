import React, { createContext, useState } from "react";

export const store = createContext();

const Detail = (props) => {
  const [student, setStudent] = useState([
    {
      Name: "Ravikant",
      Age: "25",
      Course: "b.tech",
      Batch: "A1",
      id: "1",
    },

    {
      Name: "Saurav",
      Age: "27",
      Course: "Civil",
      Batch: "A1",
      id: "2",
    },
    
  ]);
  console.log(store);
  return (
    <div>
      <store.Provider value={[student, setStudent]}>
        {props.children}
      </store.Provider>
    </div>
  );
};

export default Detail;
