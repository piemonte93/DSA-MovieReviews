import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

function App(){
  const [data, setData] = useState(null);

  useEffect(()=>{
    axios.get("/test")
        .then(res => setData(res.data))
        .catch(err => console.log("error : " + err))
  })

  return <div>{data}</div>;
}

export default App;