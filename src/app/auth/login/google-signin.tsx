// import { useEffect } from 'react';

// export default function GoogleSignInButton() {
//   useEffect(() => {
//     (function (d, s, id) {
//       let js, fjs = d.getElementsByTagName(s)[0];
//       if (d.getElementById(id)) return;
//       js = d.createElement(s); js.id = id;
//       js.src = "https://apis.google.com/js/platform.js";
//       fjs.parentNode.insertBefore(js, fjs);
//     }(document, 'script', 'google-platform'));

//     window.gapi.load('auth2', function () {
//       window.gapi.auth2.init({
//         client_id: '',
//       });
//     });
//   }, []);

//   const handleGoogleSignIn = async () => {
//     const googleAuth = window.gapi.auth2.getAuthInstance();
//     const googleUser = await googleAuth.signIn();

//     const idToken = googleUser.getAuthResponse().id_token;

//     const response = await fetch('http://localhost:3000/api/auth/google', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ token: idToken }),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       localStorage.setItem('token', data.token);
//       window.location.href = '/'; // Redirect to home/dashboard
//     } else {
//       console.error('Google Sign-In failed');
//     }
//   };

//   return (
//     <button onClick={handleGoogleSignIn} className="google-signin-button">
//       Sign in with Google
//     </button>
//   );
// }
