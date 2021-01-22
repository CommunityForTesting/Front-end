import "./App.css";
import "./scss/style.scss";
import { Route, Switch } from "react-router-dom";
import {
  Home,
  Login,
  Search,
  NotFound,
  Signup,
  PwInquiry,
  Mypage,
  Post,
  Comment,
  TodayTopic,
  Topics,
  SetPw,
  PostEdit,
} from "pages";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/search" component={Search} />
        <Route path="/signup" component={Signup} />
        <Route path="/pwInquiry" component={PwInquiry} />
        <Route path="/mypage" component={Mypage} />
        <Route path="/post" component={Post} />
        <Route path="/comment" component={Comment} />
        <Route path="/todaytopic" component={TodayTopic} />
        <Route path="/topics" component={Topics} />
        <Route path="/setpw" component={SetPw} />
        <Route path="/postedit" component={PostEdit} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
