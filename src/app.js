import React, { useState } from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';





function App(props) {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});


  const [isLoading, setIsLoading] = useState(false);
  async function callApi(requestParams, newd) {
    // mock output

    const data = {
      Headers: 'application/json',
      count: newd.count,
      results: newd.results
    };
    await setData(data);
    await setRequestParams(requestParams)


  }

  async function loadFunction(status) {

    setIsLoading(status)

  }


  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} loadFunction={loadFunction} />
      {
        !isLoading ? <div>Loading...</div> : <Results data={data} />
      }
      <Footer />
    </React.Fragment>
  )
}

export default App

