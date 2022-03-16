import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>

function App() {
  return (
    <>
      
      <NavBar/>

      <Container maxWidth="xl">
        <ItemListContainer />
      </Container>
    </>
    
  );
}

export default App;
