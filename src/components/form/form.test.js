import React, { useState } from 'react';
import './form.scss';

function Form(props) {
  const [url, setUrl] = useState('');
  const [methods, setMethods] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setReqParams({ url, methods })
    console.log(url, methods);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input data-testid="url" placeholder='Enter URL' name='url' type='text' onChange={(e) => setUrl(e.target.value)} />
          <button id="form" style={{ color: "#02a9ea" }} type="submit">GO</button>
        </label>
        <label className="methods">
          <button onClick={(e) => setMethods(e.target.value)} value="get" id="get">GET</button>
          <button onClick={(e) => setMethods(e.target.value)} value="post" id="post">POST</button>
          <button onClick={(e) => setMethods(e.target.value)} value="put" id="put">PUT</button>
          <button onClick={(e) => setMethods(e.target.value)} value="delete" id="delete">DELETE</button>
        </label>
      </form>
    </>
  );
}

export default Form;