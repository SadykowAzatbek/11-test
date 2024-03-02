import './App.css';
import {Route, Routes} from 'react-router-dom';
import AppToolbar from './components/UI/AppToolbar.tsx';
import Login from './features/Users/Login.tsx';
import Register from './features/Users/Register.tsx';
import ProductForm from './features/Products/ProductForm.tsx';

function App() {
  return (
    <>
      <header>
        <AppToolbar />
      </header>
      <Routes>
        <Route path="/" element={'main'} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add/product" element={<ProductForm />} />
      </Routes>
    </>
  )
}

export default App;