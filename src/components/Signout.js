import React from "react";
import Button from "@material-ui/core/Button";
import { auth } from "../firebase";

const SignOut = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        position: "fixed",
        width: "100%",
        backgroundColor: "#FAFAFA",
        top: 0,
        borderBottom: "solid 1px lightgray",
        zIndex: "10",
      }}
    >
      <h1>Chat</h1>
      <Button
        style={{
          paddingTop: "10px",
          paddingBottom: "10px",
          height: "50px",
          fontSize: "15px",
          fontWeight: "600",
          marginTop: "0px",
          marginRight: "10px",
        }}
        onClick={() => auth.signOut()}
        variant="contained"
        color="primary"
      >
        Sign Out
      </Button>
    </div>
  );
};

export default SignOut;
