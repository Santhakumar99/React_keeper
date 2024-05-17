import logo from "./logo.svg";
import "./App.css";
import Notes from "./Components/Notes";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Card from "./Components/Card";
import Contacts from "./Components/Contact";
import Avator from "./Components/Avator";
import ContactList from "./Components/ContactList";
import Search from "./Components/Search";

function App() {
  function createContact(Contacts) {
    return (
      <Card
        key={Contacts.name}
        name={Contacts.name}
        img={Contacts.img}
        email={Contacts.email}
        tel={Contacts.tel}
      />
    );
  }
  return (
    <>
      <Search />
    </>
  );
}

export default App;
