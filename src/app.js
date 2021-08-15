import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import React, { useState } from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history/History';





function App(props) {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [history, setHistory] = useState(null);
  const [newhis, setNewhis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  async function callApi(requestParams, newd, hestory) {
    // mock output

    const data = {
      Headers: 'application/json',
      count: newd.count,
      results: newd.results
    };
    setData(data);
    setRequestParams(requestParams)
    setHistory(hestory)
    console.log(hestory, "xtcyvuhbi");


  }


  function deleteFromHis(key) {

    let j = []
    history.forEach((e, idx) => {
      if (idx !== key) {
        return j.push(e)
      }
      return
    })

    setHistory(j)
    setNewhis(j)
  }
  async function loadFunction(status) {

    setIsLoading(status)

  }
  // useEffect(() => {

  // }, [method])



  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} loadFunction={loadFunction} historyd={history} newhis={newhis} />




      {
        !isLoading ? <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
        //3 secs
        /> : <> <Results data={data} />      </>
      }
      {history && <History history={history} deleteFromHis={deleteFromHis} />}
      <Footer />



    </React.Fragment>
  )
}

export default App

