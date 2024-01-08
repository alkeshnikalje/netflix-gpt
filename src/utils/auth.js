import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "./firebase";

export const createUser = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    throw error;
  }
};

export const signInUser = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (name, imgUrl) => {
  try {
    const updatedUser = await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imgUrl,
    });

    return updatedUser;
  } catch (error) {
    throw error;
  }
};
