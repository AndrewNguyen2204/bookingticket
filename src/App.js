import './App.css';
import { createBrowserHistory } from "history";
import { Router, Switch } from 'react-router';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import SignIn from './pages/SignIn/SignIn';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import Detail from './pages/Detail/Detail';
import Checkout from './pages/Checkout/Checkout';
import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate';
import UserTemplate from './templates/UserTemplate/UserTemplate';
import LoadingRing from './components/Loading/LoadingRing';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Movies from './pages/Admin/Movies/Movies';
import Users from './pages/Admin/Users/Users';
import AddMovie from './pages/Admin/Movies/AddMovie/AddMovie';
import EditMovie from './pages/Admin/Movies/EditMovie/EditMovie';
import AddShowtime from './pages/Admin/Movies/AddShowtime/AddShowtime';
import EditUser from './pages/Admin/Users/Edit/EditUser';



export const history = createBrowserHistory();

function App() {
  return (


    <Router history={history}>
      <LoadingRing />
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />

        <UserTemplate path="/login" exact Component={SignIn} />
        <UserTemplate path="/register" exact Component={Register} />

        <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />

        <AdminTemplate path="/dashboard" exact Component={Dashboard} />

        <AdminTemplate path="/dashboard/users" exact Component={Users} />
        <AdminTemplate path="/dashboard/users/edit/:account" exact Component={EditUser} />
        <AdminTemplate path="/dashboard/users/add" exact Component={EditUser} />


        <AdminTemplate path="/dashboard/movies" exact Component={Movies} />
        <AdminTemplate path="/dashboard/movies/add" exact Component={AddMovie} />
        <AdminTemplate path="/dashboard/movies/edit/:id" exact Component={EditMovie} />
        <AdminTemplate path="/dashboard/movies/showtime/:id" exact Component={AddShowtime} />

        <AdminTemplate path="/dashboard/profile" exact Component={Profile} />

        <HomeTemplate path="/" exact Component={Home} />

      </Switch>


    </Router>
  );
}

export default App;
