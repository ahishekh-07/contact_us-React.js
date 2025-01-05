import Navigation from "./Components/Navigation/Navigation";
import "./App.css";
import ContactHeader from "./Components/contactHeader/contactheader";
import ContactForm from "./Components/contactform/contactform";
function App() {
  return (
    <div>
      <Navigation />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
