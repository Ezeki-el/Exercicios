    import React from 'react';
    import { useSelector, useDispatch } from 'react-redux';
    import { removeContact } from '../store/contactsSlice';
    import styled from 'styled-components';

    const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    `;

    const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding: 15px;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.02);
    }
    `;

    const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    `;

    const ContactName = styled.p`
    margin: 0;
    font-weight: bold;
    font-size: 1.1em;
    color: #333;
    `;

    const ContactEmail = styled.p`
    margin: 0;
    font-size: 0.9em;
    color: #555;
    `;

    const ContactPhone = styled.p`
    margin: 0;
    font-size: 0.9em;
    color: #555;
    `;

    const Button = styled.button`
    padding: 10px 15px;
    margin-left: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #ddd;
    }

    &.edit {
        background-color: #007bff;
        color: white;

        &:hover {
        background-color: #0056b3;
        }
    }

    &.delete {
        background-color: #ff4d4d;
        color: white;

        &:hover {
        background-color: #e60000;
        }
    }
    `;

    const ContactList = ({ onEdit }) => {
    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    return (
        <List>
        {contacts.map(contact => (
            <ListItem key={contact.id}>
            <ContactInfo>
                <ContactName>{contact.name}</ContactName>
                <ContactEmail>{contact.email}</ContactEmail>
                <ContactPhone>{contact.phone}</ContactPhone>
            </ContactInfo>
            <div>
                <Button className="edit" onClick={() => onEdit(contact)}>Edita</Button>
                <Button className="delete" onClick={() => dispatch(removeContact(contact.id))}>Deleta</Button>
            </div>
            </ListItem>
        ))}
        </List>
    );
    };

    export default ContactList;
