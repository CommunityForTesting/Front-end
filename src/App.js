import './App.css';
import "./scss/style.scss";
import { Route, Switch } from 'react-router-dom';
import { Home, Login, Search, NotFound, Signup, AccountInquiry, Mypage } from 'pages';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/search" component={Search}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/accountInquiry" component={AccountInquiry}/>
        <Route path="/Mypage" component={Mypage}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
