
import React, { useState } from 'react';
import './form.scss';

function Form(props) {
  const [method, setMethod] = useState("get")
  const [url, setUrl] = useState("")
  const [textarea, setTextarea] = useState(false)
  const [jsonObj, setJsonObj] = useState(null)



  async function handleSubmit(e) {
    console.log(jsonObj);
    e.preventDefault();

    const formData = {
      method: method,
      url: url,
    };



    try {
      const req = await fetch(url, {
        method: method,
      })

      const data = await req.json();



      props.handleApiCall(formData, data);
      props.loadFunction(true)
    } catch (e) {
      console.log(e);

    }


  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={(e) => { setUrl(e.target.value) }} />
          <button data-testid="goBtn" type="submit" >GO!</button>
        </label>
        <label className="methods">
          <span tabindex="4" id="GET" onClick={(e) => { setMethod(e.target.id); setTextarea(false); }} >GET</span>
          <span tabindex="4" id="POST" onClick={(e) => { setMethod(e.target.id); setTextarea(true) }} >POST</span>
          <span tabindex="4" id="PUT" onClick={(e) => { setMethod(e.target.id); setTextarea(true) }} >PUT</span>
          <span tabindex="4" id="DELETE" onClick={(e) => { setMethod(e.target.id); setTextarea(false) }} >DELETE</span>
        </label>
        {textarea &&
          <div className="textarea" >
            <span>JSON object: </span>
            <textarea type='text' onChange={(e) => { setJsonObj(e.target.value) }} />
          </div>}
      </form>
    </>
  )
}

export default Form