import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './css/App.css';
import AddProduct from './pages/admin/AddProduct';
import AdminHome from './pages/admin/AdminHome';
import EditProduct from './pages/admin/EditProduct';
import MaintainCategories from './pages/admin/MaintainCategories';
import MaintainProducts from './pages/admin/MaintainProducts';
import MaintainShops from './pages/admin/MaintainShops';
import HomePage from './pages/global/HomePage';
import Cart from './pages/global/Cart';
import { ContactUs } from './pages/global/ContactUs';
import Shops from './pages/global/Shops';
import SingleProduct from './pages/global/SingleProduct';
import NotFound from './pages/global/NotFound';
import { ToastContainer } from 'react-toastify';
import NavigationBar from './components/NavigationBar';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import { AuthContext } from './store/AuthContext';

function App() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div className="App">
      <NavigationBar />
      
      <Routes>
        <Route path='' element={ <HomePage /> }/>
        <Route path='cart' element={ <Cart /> }/>
        <Route path='contact' element={ <ContactUs /> }/>
        <Route path='shops' element={ <Shops /> }/>
        <Route path='product/:id' element={ <SingleProduct /> }/>
        {loggedIn ? 
          <>
            <Route path='admin' element={ <AdminHome /> }/>
            <Route path='admin/add' element={ <AddProduct /> }/>
            <Route path='admin/edit/:id' element={ <EditProduct /> }/>
            <Route path='admin/maintain' element={ <MaintainProducts /> }/>
            <Route path='admin/maintain-categories' element={ <MaintainCategories /> }/>
            <Route path='admin/maintain-shops' element={ <MaintainShops /> }/>
          </> :
            <Route path='admin/*' element={ <Navigate to="/login" /> }/>
        }
        <Route path='login' element={ <Login /> }/>
        <Route path='signup' element={ <Signup /> }/>
        <Route path='*' element={ <NotFound /> }/>
      </Routes>

      <ToastContainer 
        position="top-right"
        theme="light"
      />  
    </div>
  );
}

export default App;
