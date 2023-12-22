import { Link, Route, Routes } from 'react-router-dom';
import './css/App.css';
import AddProduct from './pages/admin/AddProduct';
import AdminHome from './pages/admin/AdminHome';
import EditProduct from './pages/admin/EditProduct';
import MaintainCategories from './pages/admin/MaintainCategories';
import MaintainProducts from './pages/admin/MaintainProducts';
import MaintainShops from './pages/admin/MaintainShops';
import HomePage from './pages/global/HomePage';
import Cart from './pages/global/Cart';
import ContactUs from './pages/global/ContactUs';
import Shops from './pages/global/Shops';
import SingleProduct from './pages/global/SingleProduct';
import NotFound from './pages/global/NotFound';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={ Link } to='/'>Jaanus webshop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={ Link } to='/admin'>Admin</Nav.Link>
              <Nav.Link as={ Link } to='/shops'>Shops</Nav.Link>
              <Nav.Link as={ Link } to='/contact'>Contact</Nav.Link>
              <Nav.Link as={ Link } to='/cart'>Cart</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path='' element={ <HomePage /> }/>
        <Route path='cart' element={ <Cart /> }/>
        <Route path='contact' element={ <ContactUs /> }/>
        <Route path='shops' element={ <Shops /> }/>
        <Route path='product' element={ <SingleProduct /> }/>
        <Route path='admin' element={ <AdminHome /> }/>
        <Route path='admin/add' element={ <AddProduct /> }/>
        <Route path='admin/edit' element={ <EditProduct /> }/>
        <Route path='admin/maintain' element={ <MaintainProducts /> }/>
        <Route path='admin/maintain-categories' element={ <MaintainCategories /> }/>
        <Route path='admin/maintain-shops' element={ <MaintainShops /> }/>
        <Route path='*' element={ <NotFound /> }/>
      </Routes>
    </div>
  );
}

export default App;
