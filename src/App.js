import React, { useState } from 'react';
import AddContactForm from './components/AddContactForm';
import ContactList from './components/ContactList';
import Header from './components/Header';
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
    <div>
      <Header />
      <Container>
        <AddContactForm currentContact={currentContact} setCurrentContact={setCurrentContact} />
        <ContactList onEdit={handleEdit} />
      </Container>
    </div>
  );
}

export default App;
