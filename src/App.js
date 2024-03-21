import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Component/Footer';

function App() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />s
    </>
  );
}

export default App;
