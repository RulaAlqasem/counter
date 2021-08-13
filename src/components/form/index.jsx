

import React, { useState, useEffect } from 'react';
import './form.scss';

function Form(props) {
  const [method, setMethod] = useState("GET")
  const [url, setUrl] = useState("")
  const [textarea, setTextarea] = useState(false)
  const [jsonObj, setJsonObj] = useState(null)
  const [hestory, setHestory] = useState([])


  const c = props.historyd
  useEffect(() => {

    props.newhis && setHestory(props.newhis)

  }, [method])
  async function handleSubmit(e) {
    console.log(jsonObj);
    console.log(setHestory);
    e.preventDefault();

    const formData = {
      method: method,
      url: url,
    };

    hestory.push(formData);
    let data;
    try {
      // if (method === "GET" || method === "Delete") 
      const req = await fetch(url)

      data = await req.json();



      focus(method)

      props.handleApiCall(formData, data, hestory);
      props.loadFunction(true)

    } catch (e) {
      console.log(e);

    }


  }


  function focus(method) {
    document.getElementById(`${method}`).focus();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={(e) => { setUrl(e.target.value) }} />
          <button data-testid="goBtn" type="submit"  >GO!</button>
        </label>
        <label className="methods">
          <span tabIndex="4" focus="" id="GET" onClick={(e) => { setMethod(e.target.id); setTextarea(false); props.loadFunction(false) }} >GET</span>
          <span tabIndex="4" id="POST" onClick={(e) => { setMethod(e.target.id); setTextarea(true); props.loadFunction(false) }} >POST</span>
          <span tabIndex="4" id="PUT" onClick={(e) => { setMethod(e.target.id); setTextarea(true); props.loadFunction(false) }} >PUT</span>
          <span tabIndex="4" id="DELETE" onClick={(e) => { setMethod(e.target.id); setTextarea(false); props.loadFunction(false) }} >DELETE</span>
        </label>
        {textarea &&
          <div className="textarea" >
            <span>JSON object: </span>
            <textarea type='text' onChange={(e) => { setJsonObj(e.target.value); }} />
          </div>}
      </form>
    </>
  )
}

export default Form