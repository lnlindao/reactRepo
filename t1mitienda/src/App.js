import './App.css';
import Container from '@mui/material/Container';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';

//COMPONENTS
import NavBar from './components/Navbar/NavBar';
import ItemDetailContainer from './components/Containers/ItemDetailContainer';
import Store from './pages/Store';
import ProductDetail from './pages/ProductDetail';

//PAGES
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';



function App() {
  return (
    <>

      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/tienda" element={<Store/>}/>
          <Route path="/producto/:category/:id" element={<ProductDetail/>}/>
          <Route path="/:category" element={<Store/>}/>
          <Route path="/categorias" element={<Store/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      

      
    </>
    
  );
}

export default App;
