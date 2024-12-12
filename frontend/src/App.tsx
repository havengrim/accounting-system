
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Page from './app/dashboard/page';
import  LoginForm  from '@/components/login-form';
import SignUpForm from '@/components/sign-up-form';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          {/* <Route path="/dashboard" element={<Page />} />
          <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
