import './App.css';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';

//COMPONENTS
import NavBar from './components/Navbar/NavBar';
import ItemDetailContainer from './components/Containers/ItemDetailContainer';
import ItemListContainer from './components/Containers/ItemListContainer';
import Cart from './components/Cart/Cart'

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
          <Route path="/tienda" element={<ItemListContainer/>}/>
          <Route path="/:category" element={<ItemListContainer/>}/>          
          <Route path="/producto/:category/:id" element={<ItemDetailContainer/>}/>          
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      

      
    </>
    
  );
}

export default App;
