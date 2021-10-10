import React from "react";
import PropTypes from "prop-types";

export default function ContactItem({ name, tel, id, onDeleteContact }) {
  return (
    <li id={id}>
      <span>{name}</span>
      <span>{tel}</span>
      <button onClick={() => onDeleteContact(id)} type="button">
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string,
  tel: PropTypes.string,
  id: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
