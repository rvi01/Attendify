import './index.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignupPage from './components/SignUpPage';
import SignInPage from './components/SignInPage';
import TroubleLoggingIn from './components/TroubleLoggingIn';
import SignupPageForStudent from './components/SignUpPageForStudent';
import Header from './components/Header';
import Profile from './components/Profile';
import InstructorProfile from './components/InstructorProfile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignupPage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/troublelogging' element={<TroubleLoggingIn />} />
        <Route path='/header' element={<Header />}></Route>
        <Route path='/signupstudent' element={<SignupPageForStudent />}></Route>
        <Route
          path='/instructorprofile'
          element={<InstructorProfile />}
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
