import Home from '../pages/home/Home';
import Stock from '../pages/Stock';
import VendingMachine from '../pages/VendingMachine';
import Members from '../pages/Members';
import MyPage from '../pages/MyPage';
import NotFound from '../pages/NotFound';
import Login from '../components/forms/LoginForm';

const routes = [
  { path: '/', name: 'home', component: Home, showInNav: true}, // Use lowercase for translation keys
  { path: '/stock', name: 'stock', component: Stock, showInNav: true },
  { path: '/vending-machine', name: 'vending_machine', component: VendingMachine, showInNav: true },
  { path: '/members', name: 'members', component: Members, showInNav: true },
  { path: '/my-page', name: 'my_page', component: MyPage, showInNav: true },
  { path: '/login', name: 'login', component: Login, showInNav: true },
  { path: '*', name: 'not_found', component: NotFound, showInNav: false }, // Catch-all route
];

export default routes;
