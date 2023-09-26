import { db } from "../../firebaseConfig";
import {
  addDoc,
  collection,
  onSnapshot,
    query,
    orderBy,
} from "firebase/firestore";
import { toast } from "react-toastify";

let dbRef = collection(db, "posts");

export const postPosts = (object) => {
  addDoc(dbRef, object)
    .then(() => {
      toast.success("Post has been added successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getPosts = (setPosts) => {
    const q = query(dbRef, orderBy("timeStamp", 'desc'));
  onSnapshot(q, (response) => {
    setPosts(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
    );
  });
};

// async function getPosts(db) {
//   const postsCol = collection(db, "posts");
//   const postsSnapshot = await getDocs(postsCol);
//   setPosts(
//     postsSnapshot.docs.map((doc) => ({
//       id: doc.id, // 'id' is the document ID
//       data: doc.data(), // 'data()' retrieves the document data
//     }))
//   );
// }
// getPosts();
