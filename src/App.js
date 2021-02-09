import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Home';
import Vitamins from './Vitamins';
import Suple from './Suple';
import Burners from './Burners';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
       <Switch>
         <Route exact path="/">
           <Home />
         </Route>
         <Route path="/vitamins">
           <Vitamins />
         </Route>
         <Route path="/suple">
           <Suple />
         </Route>
         <Route path="/burners">
           <Burners />
         </Route>
       </Switch>
      </div>
      <Footer />
    </div>
    </Router>
  );
}
export default App;
