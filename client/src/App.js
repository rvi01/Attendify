import './index.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignupPage from './components/SignUpPage';
import SignInPage from './components/SignInPage';
import TroubleLoggingIn from './components/TroubleLoggingIn';
// import Header from './components/Header';
import InstructorProfile from './components/InstructorProfile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignupPage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route />
        <Route path='/troublelogging' element={<TroubleLoggingIn />} />
        <Route />
        <Route
          path='/instructorprofile'
          element={<InstructorProfile />}
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
