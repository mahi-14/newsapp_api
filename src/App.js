import "./App.css";
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

//rcc for class component

import React, { useState } from "react";
import News from "./components/News";

//export default class App extends Component {
const App = () => {
  //c = "John";
  const pageSize = 5; //jitne no. of news chahiy

  //to hide api key
  //apiKey = process.env.REACT_APP_NEWS_API;

  // state = {
  //   progress: 0,
  // };

  const [progress, setProgress] = useState(0);

  // setProgress = (progress) => {
  //   setState({ progress: progress });
  // };

  return (
    <div>
      {/* <div>hello {c} </div> */}
      <Navbar />

      <LoadingBar color="#f11946" height={3} progress={progress} />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              setProgress={setProgress}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          }
        />
        <Route
          exact
          path="/about"
          element={
            <News
              setProgress={setProgress}
              key="about"
              pageSize={pageSize}
              country="in"
              category="about"
            />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <News
              setProgress={setProgress}
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          }
        />
        <Route
          exact
          path="/general"
          element={
            <News
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <News
              setProgress={setProgress}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News
              setProgress={setProgress}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <News
              setProgress={setProgress}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <News
              setProgress={setProgress}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
