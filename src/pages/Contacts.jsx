import { Toaster } from 'react-hot-toast';
import { AppWrap, TitleApp, TitleContactList } from './Contacts.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export default function Contacts() {
  return (
    <AppWrap>
      <TitleApp>Phonebook</TitleApp>
      <ContactForm />
      <TitleContactList>Contacts</TitleContactList>
      <Filter />
      <ContactList />
      <Toaster />
    </AppWrap>
  );
}
