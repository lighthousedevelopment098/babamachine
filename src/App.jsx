import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import MainLayout from './layouts/MainLayout';
import routes from './config/routes';
import './styles/globals.css';
import './app.css'
import Footer from './components/common/footer/Footer';
import ScrollToTopButton from './components/ScrollButton/ScrollToTop';
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
              element={<route.component />}
            />
          ))}
        </Routes>
      </MainLayout>
      <Footer />
      <ScrollToTopButton/>
    </Router>
  );
};

export default App;
