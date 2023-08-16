import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout';
import About from './components/pages/About';
import Login from './components/pages/Auth/Login';
import Home from './components/pages/Home';
import Tours from './components/pages/Tours';
import Register from './components/pages/Auth/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/tours" element={ <Tours /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />

        </Route>
      </Routes>
    </>
  );
}

export default App;
