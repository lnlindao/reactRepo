import './App.css';
import Container from '@mui/material/Container';

//COMPONENTS
import NavBar from './components/Navbar/NavBar';
import ItemDetailContainer from './components/Containers/ItemDetailContainer';

import {BrowserRouter, Routes, Route}  from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
    <>

      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </BrowserRouter>
      <Container maxWidth="xl css-10m0cap">
        <ItemDetailContainer/>
      </Container>
      

      
    </>
    
  );
}

export default App;
