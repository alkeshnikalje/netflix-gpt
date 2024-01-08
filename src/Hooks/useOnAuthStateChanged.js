import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../components/user/userSlice";
const useOnAuthStateChanged = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        dispatch(addUser({ displayName, photoURL, uid }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
      }
    });
    return () => unsubscibe();
  }, [dispatch, navigate]);
};

export default useOnAuthStateChanged;
