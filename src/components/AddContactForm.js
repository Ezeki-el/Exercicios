import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../store/contactsSlice';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

const Input = styled.input`
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
`;

const Button = styled.button`
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;

&:hover {
    background-color: #0056b3;
}
`;

const AddContactForm = ({ currentContact, setCurrentContact }) => {
const dispatch = useDispatch();
const [name, setName] = useState(currentContact ? currentContact.name : '');
const [email, setEmail] = useState(currentContact ? currentContact.email : '');
const [phone, setPhone] = useState(currentContact ? currentContact.phone : '');

const handleSubmit = (e) => {
    e.preventDefault();
    if (currentContact) {
        dispatch(editContact({ id: currentContact.id, newContact: { id: currentContact.id, name, email, phone } }));
        setCurrentContact(null);
    } else {
        dispatch(addContact({ id: Date.now(), name, email, phone }));
    }
    setName('');
    setEmail('');
    setPhone('');
};

return (
    <Form onSubmit={handleSubmit}>
    <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome Completo" required />
    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
    <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefone" required />
    <Button type="submit">{currentContact ? 'Edita Contato' : 'Adiciona Contato'}</Button>
    </Form>
);
};

export default AddContactForm;
