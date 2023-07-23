import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import UserDashboard from './components/UserDashboard';
import MovieDetail from './components/MovieDetail';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<>
            <Header/>
            <Section/>
          </>}></Route>
          <Route path='/signin' element={<SignIn/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/userdashboard' element={<UserDashboard/>}></Route>
          <Route path='/moviedetail' element={<MovieDetail/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
