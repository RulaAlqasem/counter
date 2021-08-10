import React from 'react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
// class Results extends React.Component {
//   render() {
//     return (
//       <section>
//         <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
//       </section>
//     );
//   }
// }

// export default Results;



function Results(props) {
  return (
    <section data-testid="result">
      <h1> "Headers"</h1>
      {props.data ? <JSONPretty id="json-pretty" data={props.data.Headers} mainStyle="padding:1em" valueStyle="font-size:1.5em" style={{ fontSize: "1.4em" }} ></JSONPretty> : null}

      <h1> "count"</h1>
      {props.data ? <JSONPretty id="json-pretty" data={props.data.count} mainStyle="padding:1em" valueStyle="font-size:1.5em" style={{ fontSize: "1.4em" }} ></JSONPretty> : null}

      <h1> "result " [ </h1>
      {props.data ? props.data.results.map((ele) => <JSONPretty id="json-pretty" data={ele} mainStyle="padding:1em" valueStyle="font-size:1.5em" style={{ fontSize: "1.4em" }} ></JSONPretty>) : null}
      <h1>   ] </h1>
    </section>
  )
}

export default Results
