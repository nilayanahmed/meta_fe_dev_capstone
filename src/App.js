import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import {Routes, Route} from 'react-router-dom';
import BookingPage from './BookingPage';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className="container">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </ChakraProvider>
  );
}

export default App;
