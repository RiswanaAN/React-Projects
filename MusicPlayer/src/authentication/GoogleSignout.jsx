import React from "react";
import { GoogleLogout } from "@dump-work/react-google-login";

const clientId= "710189488851-gp6d5ta4a1i81m7vug4u3s8i3ha5i2i8.apps.googleusercontent.com"
function GoogleSignout(){
  const onSuccess = () => {
    
    alert("Logout made successfully");
  };
  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        isSignedIn= {false}

      ></GoogleLogout>
    </div>
  );
};

export default GoogleSignout;
