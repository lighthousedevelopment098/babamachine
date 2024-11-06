import Home from '../pages/home/Home';
import Stock from '../pages/stock/stockpage';
import Members from '../pages/member/Members';
import NotFound from '../pages/NotFound';
import Login from '../components/forms/LoginForm';
import Register from '../components/forms/SignUpForm';
import stockDetail from '../pages/stockDetail/stockDetail';

const routes = [
  { path: '/', name: 'home', component: Home, showInNav: true}, // Use lowercase for translation keys
  { path: '/stock', name: 'stock', component: Stock, showInNav: true },
  { path: '/category/:categoryName', name: 'catbyslug', component: Stock, showInNav: true },
  { path: '/members', name: 'members', component: Members, showInNav: true },
  { path: '/register', name: 'register', component: Register, showInNav: false }, // Add name here
  { path: '/stockdetail', name: 'stockdetail', component: stockDetail, showInNav: false },
  { path: '*', name: 'not_found', component: NotFound, showInNav: false }, // Catch-all route
];

export default routes;
