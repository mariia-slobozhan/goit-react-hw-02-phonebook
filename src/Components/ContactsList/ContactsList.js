import React from 'react';
import ContactItem from '../ContactItem/ContactItem'
import { v4 as uuidv4 } from 'uuid';

export default function ContactList({items, onDeleteContact}) {
   return (
       <ul>
           {items.map(item => 
             ( <ContactItem key={uuidv4()} id={uuidv4()} name={item.name} tel={item.number} onClick={() => onDeleteContact(item.id)}/>)
           )}
       </ul>
   )
}

