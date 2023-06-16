import './App.css';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import {Routes, Route} from 'react-router-dom';
import BookingPage from './BookingPage';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
