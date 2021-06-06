import './App.css';
import Home from "./components/Home";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
  
      <Route path="/" exact component={Home} />
      <Route path="/projects" component= {Projects}/>

    </Router>
  );
}

export default App;
