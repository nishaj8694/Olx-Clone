import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyArKBr1qETmeF8VAXYuVw0k8XII67LySPc",
//     authDomain: "olx-clone-e4e7a.firebaseapp.com",
//     projectId: "olx-clone-e4e7a",
//     storageBucket: "olx-clone-e4e7a.appspot.com",
//     messagingSenderId: "478581959781",
//     appId: "1:478581959781:web:97269aaa3878249880ea8c",
//     measurementId: "G-6SYCHYGXS4"
// };
const firebaseConfig = {
    apiKey: "AIzaSyBtwxcITXMCJvm1ZLvcIMIWmsobKf4CMNA",
    authDomain: "olxclone-789fc.firebaseapp.com",
    projectId: "olxclone-789fc",
    storageBucket: "olxclone-789fc.appspot.com",
    messagingSenderId: "517312969103",
    appId: "1:517312969103:web:4991ded53ff0ab003b73fa",
    measurementId: "G-D3X81W3659"
  };
export default firebase.initializeApp(firebaseConfig) 