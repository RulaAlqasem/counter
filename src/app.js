import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import React, { useState, useEffect, useReducer } from 'react';

import './app.scss';


// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history/History';


const initialState = {
  history: []
};


function historyReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_toHistory':

      const history = [...state.history, payload.history];

      return { history };
    default:
      return state;
  }
}
function addAction(history) {
  return {
    type: 'ADD_toHistory',
    payload: { history },
  };
}


function App(props) {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [history, setHistory] = useState([]);
  const [newhis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [history1, dispatch] = useReducer(historyReducer, initialState);
  async function callApi(requestParams, newd, hestory) {
    // mock output

    const data = {
      Headers: 'application/json',
      count: newd.count,
      results: [newd.results]
    };
    setData(data);
    setRequestParams(requestParams)
    console.log(history1);
    console.log(hestory, "xtcyvuhbi");
    dispatch(addAction(hestory))
    // setHistory(hestory)
    history.push(hestory[0])
    localStorage.setItem('history', JSON.stringify(history));



  }




  async function showResult(method, url, data1) {



    console.log(requestParams);
    console.log(method, url);
    setRequestParams({ method, url });


    const data2 = {
      Headers: 'application/json',
      count: data1.count,
      results: [data1.results]

    };
    setData(data2);
    setIsLoading(true)


  }
  async function loadFunction(status) {

    setIsLoading(status)

  }

  useEffect(() => {
    // console.log("paars", JSON.parse(window.localStorage.getItem('history')));
    setHistory(JSON.parse(localStorage.getItem('history')))
    // dispatch(addAction(history))


  }, [])


  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} loadFunction={loadFunction} historyd={history} newhis={newhis} setRequestParams={setRequestParams} />




      {
        !isLoading ? <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
        //3 secs
        /> : <>{data && <Results data={data} />}       </>
      }
      {history.length && <History history={history} showResult={showResult} loadFunction={loadFunction} setRequestParams={setRequestParams} />}
      <Footer />



    </React.Fragment>
  )
}

export default App

