import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
import Alert from './components/layout/Alert';
import User from './pages/User';

function App() {
  return (


    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className='coontainer mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/user/:login' element={<User />} />
                <Route exact path='/notfound' element={<NotFound />} />
                <Route exact path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>


        </Router>

      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
