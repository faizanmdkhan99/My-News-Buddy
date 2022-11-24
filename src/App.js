import React, {useState } from 'react';
import "./App.css";
import NavigBar from './components/NavigBar';
import News from './components/News';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


const App=()=> {
const pageSize=9;
const apiKey=process.env.REACT_APP_NEWS;

const [progress,setProgress]=useState(0);

    return (
      <div>
      <BrowserRouter>
      <NavigBar/>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Routes>
        <Route  exact path="/" element=<News setProgress={setProgress} apiKey={apiKey} key="general" category="general" pageSize={pageSize} />></Route>
        <Route  exact path="/business" element=<News setProgress={setProgress} apiKey={apiKey} key="business"  category="business" pageSize={pageSize} />></Route>
        <Route  exact path="/entertainment" element=<News setProgress={setProgress} apiKey={apiKey} key="entertainment" category="entertainment" pageSize={pageSize} />></Route>
        <Route  exact path="/general" element=<News setProgress={setProgress} apiKey={apiKey} key="general" category="general" pageSize={pageSize} />></Route>
        <Route  exact path="/health" element=<News setProgress={setProgress} apiKey={apiKey} key="health" category="health" pageSize={pageSize} />></Route>
        <Route  exact path="/science" element=<News setProgress={setProgress} apiKey={apiKey} key="science" category="science" pageSize={pageSize} />></Route>
        <Route  exact path="/sports" element=<News setProgress={setProgress} apiKey={apiKey} key="sports"  category="sports" pageSize={pageSize} />></Route>
        <Route  exact path="/technology" element=<News setProgress={setProgress} apiKey={apiKey}  key="technology" category="technology" pageSize={pageSize} />></Route>
       
      </Routes>
      </BrowserRouter>
      </div>
    )
  }





export default App;


