import React, { useState } from "react";

export const AddToList = ({ arr }) => {
  const [arr1, setArr1] = useState(arr);

  const handleClick = () => {
    const newValue = [...arr1];

    const newRepository = {
      id: newValue.length+1,
      description: "this is very new"+ newValue.length
    };

    newValue.push(newRepository);
    setArr1(newValue);
  };

  const HandleDelete = index => {
    const newValue = arr1;
    newValue.splice(index, 1);

    setArr1([...newValue]);
  };

  

  return (
    <div>
      <button onClick={handleClick}> add</button>
      <ul className="list">
        {arr1.map((des, key ) => (
          <AddTo ind={key} s={des.description} HandleDelete={()=>HandleDelete(key)}/>
        ))}
      </ul>
    </div>
  );
};
const AddTo = ({ s, ind ,HandleDelete}) => {
  const [addclass, setclass] = useState(false);

  return (
    <div className={`${addclass ? `line` : ``}`}>
      <li>
        {s}
        <input type="checkbox" onChange={() => setclass(!addclass)} />
        <button onClick={ HandleDelete}>Delete</button>
      </li>
    </div>
  );
};
