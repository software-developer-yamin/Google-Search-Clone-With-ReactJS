import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Routes from './components/Routes';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <section className={darkTheme ? "dark" : ""}>
      <section className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar />
        <Routes />
        <Footer />
      </section>
    </section>
  );
}

export default App;
