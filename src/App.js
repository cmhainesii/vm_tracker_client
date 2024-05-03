import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import VMList from './components/VMList';
import CreateVM from './components/CreateVM';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<VMList />}></Route>
          <Route path='/create' element={<CreateVM />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
