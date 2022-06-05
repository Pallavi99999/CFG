//import logo from './logo.svg';
import React, { Suspense, lazy} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const Login = lazy(() => import('./component/Login'))
const Signup = lazy(() => import('./component/signupComponent'))

function App() {
  return (
    <div className="App">
       <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
