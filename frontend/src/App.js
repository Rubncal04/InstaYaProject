import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignIn from './components/SignIn';
import Welcome from './components/Welcome';

const App = () => {
  return (
    <div className="">
      <div className='container p-4'>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/welcome/:id' element={<Welcome/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
