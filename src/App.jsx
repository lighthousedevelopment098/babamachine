import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import MainLayout from './layouts/MainLayout';
import routes from './config/routes';
import './styles/globals.css';

const App = () => {
  return (
    <Router>
      <Header />
      <MainLayout>
        <Routes>
          {routes.map((route) => (
            <Route 
              key={route.path}
              path={route.path}
              element={<route.component />} // Dynamic component rendering
            />
          ))}
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
