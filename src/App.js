import React from "react";
import Signin from "./components/Signin";
import { auth } from "./firebase";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);

  return <div>{!user ? <Signin /> : <Chat />}</div>;
}

export default App;
