import {Routes , Route } from "react-router-dom" 
import DetailedView from './Pages/DetailedView';
import Home from './Pages/Home';
import Header from "./components/Header";
import Checkout from "./Pages/CheckoutPage";
import Viewcategorypage from "./Pages/Viewcategorypage";


function App() {
  return (
    <div>
      <Routes >
            <Route path="/" element={<Home/> } /> 
            <Route path="/detail" element={ <DetailedView/> } />
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/category/:id" element={<Viewcategorypage/>}/>
      </Routes>  
    </div>
  );
}

export default App;
