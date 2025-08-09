"use client";

import {
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

const googleProvider = new GoogleAuthProvider();

function onChange(cb: (user: User | null) => void) {
  return onAuthStateChanged(auth, cb);
}

async function signInWithEmail(email: string, password: string) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

async function signInWithGoogle() {
  const cred = await signInWithPopup(auth, googleProvider);
  return cred.user;
}

async function signUpWithEmail(email: string, password: string, name?: string) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);

  // Crear doc de usuario en Firestore
  await setDoc(doc(db, "users", cred.user.uid), {
    uid: cred.user.uid,
    email: cred.user.email,
    displayName: name || cred.user.displayName || null,
    photoURL: cred.user.photoURL || null,
    createdAt: serverTimestamp(),
    provider: cred.user.providerId,
  });

  return cred.user;
}

async function resetPassword(email: string) {
  await sendPasswordResetEmail(auth, email);
}

async function logOut() {
  await signOut(auth);
}

export const authService = {
  onChange,
  signInWithEmail,
  signInWithGoogle,
  signUpWithEmail,
  resetPassword,
  logOut,
};
