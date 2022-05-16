import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import AddUser from './components/AddUser/AdUser';
import LogIn from './components/LogIn/LogIn';
import Header from './components/Header/Header';
import Update from './components/Update/Update';

function App() {
  return (
    <div className="">
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/adduser' element={<AddUser></AddUser>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/update/:id' element={<Update></Update>}></Route>
      </Routes>
    </div>
  );
}

export default App;
