import React, { useState, useEffect } from "react";
export const CounterS = () =>{
  const [secound, setsecound] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setsecound(secound + 1);
    }, 1000);
  }, [secound]);
return(
  <p>You spent {secound} secound on this websit</p>
)
  
}
