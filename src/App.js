import { Routes, Route } from 'react-router-dom';

import Home from "./routes/home/home.component";
import Shop from './routes/shop/shop.component';
import TopNav from './routes/TopNav/topNav.component';

const App = () =>{
  return (
    <Routes>
      <Route path='/' element={<TopNav />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
      </Route>
    </Routes>
    
  );
}

export default App;
