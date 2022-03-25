import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/Item/ItemListContainer';
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
        <ItemListContainer/>
      </Container>
    </>
    
  );
}

export default App;
