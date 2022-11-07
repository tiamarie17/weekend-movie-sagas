import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import '../Details/Details.css';
import '../MovieList/MovieList.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';


function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        <Route path="/details/:id" exact>
            <Details />
        </Route>
      </Router>
    </div>
  );
}


export default App;
