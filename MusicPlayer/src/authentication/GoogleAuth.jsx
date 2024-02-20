import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
// import GoogleLogin from "@dump-work/react-google-login";
// const clientId= "710189488851-gp6d5ta4a1i81m7vug4u3s8i3ha5i2i8.apps.googleusercontent.com"
function GoogleAuth() {
      const navigate= useNavigate();
      function handleCallbackResponse(reponse){
          console.log("Encoded JWT ID token: "+reponse.credential);
          let userObject= jwtDecode(reponse.credential);
          console.log(userObject);
          let userDetailGoogle = JSON.stringify(userObject);
          window.localStorage.setItem("userDetailGoogle", userDetailGoogle);
          navigate('/musicplayer')
      }

      useEffect(()=>{
          google.accounts.id.initialize({
              client_id:"710189488851-gp6d5ta4a1i81m7vug4u3s8i3ha5i2i8.apps.googleusercontent.com",
              callback: handleCallbackResponse
          });

          google.accounts.id.renderButton(
              document.getElementById("signIn"),
              {theme: "outline", size: "large"}
          )
      }, [])
    return (
      <div className='mainGoogleContainer'>
          <div id='signIn'></div>
      </div>
    )
//   const onSuccess = (res) => {
//     navigate('/musicplayer')
//     console.log("[Login Success] currentUser:", res.profileObj);
//   };
//   const onFailure = (res) => {
//     console.log("[Login Failed] res:", res);
//   };
//   return (
//     <div>
//       <GoogleLogin
//         clientId={clientId}
//         buttonText="Login with Google"
//         onSuccess={onSuccess}
//         onFailure={onFailure}
//         cookiePolicy= {'single_host_origin'}
//         style={{marginTop: '100px'}}
//         isSignedIn= {true}
//       ></GoogleLogin>
//     </div>
//   );
}

export default GoogleAuth;
