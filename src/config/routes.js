import Home from '../pages/home/Home';
import Stock from '../pages/stock/stockpage';
import Members from '../pages/member/Members';
import NotFound from '../pages/NotFound';

import Register from '../components/forms/SignUpForm';
import stockDetail from '../pages/stockDetail/stockDetail';
import Login from '../components/forms/LoginForm';
import Greeting from '../pages/Company/Greeting';
import Contact from '../pages/Contact/Contact';

const routes = [
  { path: '/', name: 'home', component: Home, showInNav: true}, // Use lowercase for translation keys
  { path: '/stock', name: 'stock', component: Stock, showInNav: true },
  { path: '/category/:categoryName', name: 'catbyslug', component: Stock, showInNav: false },
  { path: '/manufacturer/:manufacturerName', name: 'makerbyslug', component: Stock, showInNav: false },

  { path: '/members', name: 'members', component: Members, showInNav: true },
  { path: '/register', name: 'register', component: Register, showInNav: false }, // Add name here
  { path: '/stockdetail', name: 'stockdetail', component: stockDetail, showInNav: false },
  { path: '*', name: 'not_found', component: NotFound, showInNav: false }, // Catch-all route
  { path: '/login', name: 'Login', component: Login, showInNav: false }, // Catch-all route
  { path: '/greeting', name: 'greeting', component: Greeting, showInNav: false }, // Catch-all route
  { path: '/contact', name: 'contact', component: Contact, showInNav: false }, // Catch-all route
];

export default routes;
