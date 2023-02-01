// import { useState } from "react";
import Home from "./pages/home/Home";
import List from "./pages/list/List"
import SinglePage from "./pages/single/SinglePage"
import NewPage from "./pages/new/NewPage"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { userInputs, productInputs } from "./FormSource";
import './style/dark.scss'
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import ProductList from "./pages/product/ProductList";


function App() {

  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />

            <Route path="users">
              <Route index element={<List heading="Users" />} />
              <Route path=":userId" element={<SinglePage />} />
              <Route path="new" element={<NewPage inputs={userInputs} title="Add new User" />} />
            </Route>

            <Route path="products">
              <Route index element={<ProductList heading="Products " />} />
              <Route path=":productid" element={<SinglePage />} />
              <Route path="new" element={<NewPage inputs={productInputs} title="Add new Product" />} />
            </Route>



          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
