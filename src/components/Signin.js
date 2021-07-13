import React from "react";
import firebase from "firebase";
import Button from "@material-ui/core/Button";

const Signin = () => {
  function SignInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <Button
        style={{
          padding: "20px",
          fontSize: "15px",
          fontWeight: "600",
        }}
        onClick={SignInWithGoogle}
        variant="contained"
        color="primary"
      >
        Continue with Google
      </Button>
    </div>
  );
};

export default Signin;
