import './App.scss';
import  Layout from './Components/Layout/index'
import Home from './Components/Home/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/> 
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;