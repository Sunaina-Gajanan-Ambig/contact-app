import React, { useState, useEffect } from 'react';

const ContactForm = ({ currentContact, onSubmit, closeForm }) => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        nickname: '',
        dob: '',
        phoneNumbers: [{ number: '', type: 'Mobile' }],
        emails: [{ email: '', type: 'Personal' }],
    });

    useEffect(() => {
        if (currentContact) {
            setFormData(currentContact);
        }
    }, [currentContact]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePhoneChange = (index, e) => {
        const newPhoneNumbers = [...formData.phoneNumbers];
        newPhoneNumbers[index][e.target.name] = e.target.value;
        setFormData({ ...formData, phoneNumbers: newPhoneNumbers });
    };

    const handleEmailChange = (index, e) => {
        const newEmails = [...formData.emails];
        newEmails[index][e.target.name] = e.target.value;
        setFormData({ ...formData, emails: newEmails });
    };

    const addPhoneNumber = () => {
        setFormData({
            ...formData,
            phoneNumbers: [...formData.phoneNumbers, { number: '', type: 'Mobile' }],
        });
    };

    const deletePhoneNumber = (index) => {
        const updatedPhoneNumbers = formData.phoneNumbers.filter((_, i) => i !== index);
        setFormData({ ...formData, phoneNumbers: updatedPhoneNumbers });
    };

    const addEmail = () => {
        setFormData({
            ...formData,
            emails: [...formData.emails, { email: '', type: 'Personal' }],
        });
    };

    const deleteEmail = (index) => {
        const updatedEmails = formData.emails.filter((_, i) => i !== index);
        setFormData({ ...formData, emails: updatedEmails });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        closeForm();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="firstname" value={formData.firstname} onChange={handleChange} placeholder="First Name" required />
            <input name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Last Name" required />
            <input name="nickname" value={formData.nickname} onChange={handleChange} placeholder="Nickname" />
            <input name="dob" type="date" value={formData.dob} onChange={handleChange} />
            
            <h4>Phone Numbers</h4>
            {formData.phoneNumbers.map((phone, index) => (
                <div key={index}>
                    <input name="number" value={phone.number} onChange={(e) => handlePhoneChange(index, e)} placeholder="Phone Number" />
                    <select name="type" value={phone.type} onChange={(e) => handlePhoneChange(index, e)}>
                        <option value="Mobile">Mobile</option>
                        <option value="Home">Home</option>
                        <option value="Work">Work</option>
                    </select>
                    <button type="button" onClick={() => deletePhoneNumber(index)}>Delete</button>
                </div>
            ))}
            <button type="button" onClick={addPhoneNumber}>Add Phone Number</button>

            <h4>Emails</h4>
            {formData.emails.map((email, index) => (
                <div key={index}>
                    <input name="email" value={email.email} onChange={(e) => handleEmailChange(index, e)} placeholder="Email" />
                    <select name="type" value={email.type} onChange={(e) => handleEmailChange(index, e)}>
                        <option value="Personal">Personal</option>
                        <option value="Work">Work</option>
                    </select>
                    <button type="button" onClick={() => deleteEmail(index)}>Delete</button>
                </div>
            ))}
            <button type="button" onClick={addEmail}>Add Email</button>

            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
