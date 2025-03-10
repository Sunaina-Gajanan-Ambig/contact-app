// src/components/ContactList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/actions';

const ContactList = ({ setCurrentContact, setShowPopup }) => {
    const contacts = useSelector((state) => state.contacts);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteContact(id));
    };

    const handleViewDetail = (contact) => {
        setCurrentContact(contact);
        setShowPopup(true);
    };

    return (
        <div>
            <h2>Contact List</h2>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        {contact.firstname} {contact.lastname}
                        <button onClick ={() => handleViewDetail(contact)}>View</button>
                        <button onClick={() => handleDelete(contact.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;