import React, { useState, Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Posts from "./pages/Posts";

class App extends Component {
  render() {
    return (
      <>
        <div>
          <Router>
            <div className=" bg-gray-100 fixed flex w-[100vw] h-auto top-0 border-b-4">
              <Navbar />
            </div>
            <div className="App">
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path='/create-post' element={< CreatePost />}></Route>  
                <Route exact path='/posts' element={< Posts />}></Route>  
                {/* <Route exact path='/about' element={< About />}></Route>  
                 <Route exact path='/contact' element={< Contact />}></Route>   */}
              </Routes>
            </div>
          </Router>
        </div>
      </>
    );
  }
}
export default App;
