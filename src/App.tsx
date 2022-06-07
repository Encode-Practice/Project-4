import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Upload from './pages/Upload';
import Tab from  './components/Tab';
import Wallet from "./pages/Wallet";

function App() {
  return (
    <BrowserRouter >
    <Routes>
        <Route  path="/" element={<Home />} />       
        <Route  element={<Tab />}>
           <Route path="/images/upload" element={<Upload />} />
           <Route path="/wallet" element={<Wallet />} />
           {/* <Route path="/images/all" element={<DatabaseView />} /> */}
        </Route>
    </Routes>
</BrowserRouter>
  );
}

export default App;
