

import React, { useState, useReducer } from 'react';
import './form.scss';



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


function Form(props) {
  const [method, setMethod] = useState("GET")
  const [url, setUrl] = useState("")
  const [textarea, setTextarea] = useState(false)
  const [jsonObj, setJsonObj] = useState(null)
  const [hestory, setHestory] = useState([])
  const [history2, dispatch] = useReducer(historyReducer, initialState);

  // let c = props.newhis
  // useEffect(() => {
  //   console.log("hi");
  //   if (c) setHestory(c)

  // }, [method])
  let count = 0
  async function handleSubmit(e) {
    console.log(history2);
    console.log(jsonObj);
    console.log(setHestory);
    e.preventDefault();






    let data;
    try {
      if (method === "GET" || method === "DELETE") {

        const req = await fetch(url)

        data = await req.json();



      }
      if (method === "PUT" || method === "POST") {



        data = {

          Headers: 'application/json',
          count: count + 1,
          results: [jsonObj]

        }



      }


      const formData = {
        method: method,
        url: url,
        data: data
      };

      hestory.push(formData);
      dispatch(addAction(formData))

      focus(method)

      props.setRequestParams(formData)
      props.handleApiCall(formData, data, hestory);
      props.loadFunction(true)

    } catch (e) {

      console.log(e);

    }
    e.target.reset()

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