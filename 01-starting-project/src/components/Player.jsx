import { useState, useRef } from "react";

export default function Player() {
  const[name,setName]=useState('');
  const userName = useRef();

  function handelClick(){
    setName(userName.current.value);
    userName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {name ?? ""}</h2>
      <p>
        <input type="text" ref={userName}/>
        <button onClick={handelClick} >Set Name</button>
      </p>
    </section>
  );
}
