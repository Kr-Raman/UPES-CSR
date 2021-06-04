import './App.css';
import Home from "./components/Home";
import Project from "./components/Projects";
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
  
      <Route path="/" exact component={Home} />
      <Route path="/project" component= {Project}/>

    </Router>
  );
}

export default App;
