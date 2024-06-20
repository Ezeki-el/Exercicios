import React, { useState } from 'react';
import AddContactForm from './components/AddContactForm';
import ContactList from './components/ContactList';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

function App() {
  const [currentContact, setCurrentContact] = useState(null);

  const handleEdit = (contact) => {
    setCurrentContact(contact);
  };

  return (
    <Container>
      <h1>Contact List</h1>
      <AddContactForm currentContact={currentContact} setCurrentContact={setCurrentContact} />
      <ContactList onEdit={handleEdit} />
    </Container>
  );
}

export default App;
