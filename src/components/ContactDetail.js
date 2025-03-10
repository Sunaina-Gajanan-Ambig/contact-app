import React from 'react';
import Modal from 'react-modal';

const ContactDetail = ({ isOpen, onRequestClose, contact }) => {
    if (!contact) return null; // If no contact is selected, return null

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false}>
            <h2>Contact Details</h2>
            <div>
                <p><strong>First Name:</strong> {contact.firstname}</p>
                <p><strong>Last Name:</strong> {contact.lastname}</p>
                <p><strong>Nickname:</strong> {contact.nickname}</p>
                <p><strong>Date of Birth:</strong> {contact.dob}</p>
                
                <h4>Phone Numbers</h4>
                {contact.phoneNumbers.length > 0 ? (
                    contact.phoneNumbers.map((phone, index) => (
                        <p key={index}>{phone.number} ({phone.type})</p>
                    ))
                ) : (
                    <p>No phone numbers available.</p>
                )}

                <h4>Emails</h4>
                {contact.emails.length > 0 ? (
                    contact.emails.map((email, index) => (
                        <p key={index}>{email.email} ({email.type})</p>
                    ))
                ) : (
                    <p>No emails available.</p>
                )}
            </div>
            <button onClick={onRequestClose}>Close</button>
        </Modal>
    );
};

export default ContactDetail;