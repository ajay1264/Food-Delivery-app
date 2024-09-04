
import './App.css';
import Home from './Screens/Home';
import {BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// //import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';



function App() {
  return (


        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Home />} />
          </Routes>
        </Router>
    
  );
}

export default App;
