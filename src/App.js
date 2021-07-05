import './App.css';
import { createBrowserHistory } from "history";
import { Router, Switch } from 'react-router';
import { HomeTemPlate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import SignIn from './pages/SignIn/SignIn';
import Register from './pages/Register/Register';
import Detail from './pages/Detail/Detail';
import Checkout from './pages/Checkout/Checkout';
import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate';
import UserTemplate from './templates/UserTemplate/UserTemplate';

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemPlate path="/home" exact Component={Home} />
        <HomeTemPlate path="/contact" exact Component={Contact} />
        <HomeTemPlate path="/news" exact Component={News} />
        <HomeTemPlate path="/detail/:id" exact Component={Detail} />
        <UserTemplate path="/signin" exact Component={SignIn} />
        <UserTemplate path="/register" exact Component={Register} />
        <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />

        <HomeTemPlate path="/" exact Component={Home} />

      </Switch>


    </Router>
  );
}

export default App;
