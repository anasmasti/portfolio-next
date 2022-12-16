import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import firebaseConfig from "../../utils/firebase/config";

export default function (data) {
  firebase.initializeApp(firebaseConfig);
  const contactRef = firebase.firestore().collection("/contact");
  return contactRef.doc().set(data);
}
