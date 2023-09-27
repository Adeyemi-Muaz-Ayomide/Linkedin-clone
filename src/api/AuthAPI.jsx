import {
  signInWithEmailAndPassword,
  // createUserWithEmailAndPassword,
  // signOut,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";

export const LoginAPI = (email, password) => {
  try {
    let response = signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    return err;
  }
};
// export const RegisterAPI = async (email, password) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     return userCredential.user; // Return the user object on success
//   } catch (err) {
//     return err; // Return the error on failure
//   }
// };

// export const onLogout = () => {
//   try {
//     signOut(auth);
//   } catch (err) {
//     return err;
//   }
// };
