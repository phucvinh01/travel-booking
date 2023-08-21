import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Tours from './pages/Tours';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useContext } from 'react';
import { UserContext } from './context/UserContext';
function App() {
  const { login } = useContext(UserContext)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      login(localStorage.getItem('name'), localStorage.getItem('token'))
    }
  }, [])

  return (

    <>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/tours" element={ <Tours /> } />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={ 3000 }
        hideProgressBar={ false }
        newestOnTop={ false }
        closeOnClick
        rtl={ false }
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */ }
      <ToastContainer />
    </>
  );
}

export default App;
