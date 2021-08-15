import React from 'react'
import './history.scss';
function History(props) {


  return (

    <div>
      {/* <h1>History</h1>
      {props.history ? props.history.map((e, idx) => {

        return (
          <div key={e.toString()}>
            <br />
            <br />
            <h id=''>URL: {e.url}</h>
            <br />
            <br />
            <h>methode: {e.method}</h>
            <br />
            <br />
            <span onClick={(e) => { props.deleteFromHis(idx) }}>Delete</span>
          </div>
        )
      }) : <h3>impty</h3>} */}


      <h2>History</h2>

      <table>
        <tr>
          <th>URL</th>
          <th>Methode</th>
          {/* <th>delete from history</th> */}
        </tr>

        {props.history && props.history.map((e, idx) => {


          return (
            <tr key={e.toString()}>

              <td id=''>URL: {e.url}</td>

              <td>methode: {e.method}</td>

              <td onClick={(event) => { props.showResult(e.method, e.url, e.data); props.loadFunction(true) }}>Show Results</td>
            </tr>
          )
        })}


      </table>

    </div >

  )
}

export default History
