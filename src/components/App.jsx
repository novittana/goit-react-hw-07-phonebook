import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Contact from './Contact/Contact';
import { Filter } from './Filter/Filter';

export function App() {
 
  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList>
        <Contact />
      </ContactList>
    </div>
  );
  }

  
