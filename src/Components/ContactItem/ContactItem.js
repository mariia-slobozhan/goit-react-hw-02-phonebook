import React from "react";

export default function ContactItem({ name, tel, id }) {
  return (
    <li id={id}> 
      <span>{name}</span>
      <span>{tel}</span>
    </li>
  );
}
