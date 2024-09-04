
import './App.css';
import Home from './Screens/Home';
import {BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'


function App() {
  return (

<Router>
<Routes>
  <Route exact path='/' element={<Home/>}/>
  <Route exact path='/login' element={<Home/>}/>
  <Route/>
</Routes>
</Router>
  );
}

export default App;
