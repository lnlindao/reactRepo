import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
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

      <Container maxWidth="xl css-10m0cap">
        <ItemListContainer greeting={"Da un vistazo a nuestros productos"} />
      </Container>
    </>
    
  );
}

export default App;
