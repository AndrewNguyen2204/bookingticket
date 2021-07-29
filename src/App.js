import './App.css';
import { createBrowserHistory } from "history";
import { Router, Switch } from 'react-router';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import SignIn from './pages/SignIn/SignIn';
import Register from './pages/Register/Register';
import Detail from './pages/Detail/Detail';
import Checkout from './pages/Checkout/Checkout';
import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate';
import UserTemplate from './templates/UserTemplate/UserTemplate';
import LoadingRing from './components/Loading/LoadingRing';



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

        <HomeTemplate path="/" exact Component={Home} />

      </Switch>


    </Router>
  );
}

export default App;
