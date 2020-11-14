import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./component/homePage";
import SignIn from "./component/signIn";
import SignUp from "./component/signUp";

// const Test = () => {
//   const [data, setData] = useState("Test");

//   useEffect(() => {
//     socket.emit(TAG_SOCKET_IO.JOIN_ROOM, "idBoard");

//     socket.on(TAG_SOCKET_IO.TEST_RECEIVE_DATA, (data) => {
//       setData(data);
//     });

//     return () => socket.disconnect();
//   }, []);

//   const handleTest = () => {
//     socket.emit(TAG_SOCKET_IO.TEST_SEND_DATA, {
//       idBoard: "idBoard",
//       msg: "Hello",
//     });
//   };

//   return (
//     <div>
//       <div>{data}</div>
//       <button onClick={handleTest}>Click</button>
//     </div>
//   );
// };

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/register">
          <SignUp />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
        <Route>
          <div>Not found</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
