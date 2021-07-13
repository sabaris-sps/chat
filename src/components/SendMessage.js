import React, { useState } from "react";
import { Input, Button } from "@material-ui/core";
import { db, auth } from "../firebase";
import firebase from "firebase";

const SendMessage = ({ scroll }) => {
  const [msg, setMsg] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await db.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMsg("");
    scroll.current.scrollIntoView({ behaviour: "smooth" });
  }

  return (
    <form onSubmit={sendMessage}>
      <div className="sendMsg">
        <Input
          style={{
            width: "100%",
            fontSize: "15px",
            fontWeight: "550",
            marginLeft: "5px",
            marginBottom: "-3px",
          }}
          value={msg}
          onChange={(e) => {
            setMsg(e.target.value);
          }}
          placeholder="Enter your message..."
        />
        <Button
          style={{
            width: "18%",
            fontSize: "15px",
            fontWeight: "550",
            margin: "4px 5% -13px 5%",
            maxWidth: "200px",
          }}
          type="submit"
        >
          Send
        </Button>
      </div>
    </form>
  );
};

export default SendMessage;
