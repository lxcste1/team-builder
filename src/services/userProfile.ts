"use client";

import {
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { User } from "firebase/auth";

export type UserProfile = {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  createdAt?: any;
  updatedAt?: any;
};

export async function ensureUserDoc(u: User) {
  const ref = doc(db, "users", u.uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, {
      uid: u.uid,
      email: u.email ?? null,
      displayName: u.displayName ?? null,
      photoURL: u.photoURL ?? null,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    } satisfies UserProfile);
  }
}

export function onUserProfile(
  uid: string,
  cb: (p: UserProfile | null) => void
) {
  const ref = doc(db, "users", uid);
  return onSnapshot(ref, (snap) => {
    cb(snap.exists() ? (snap.data() as UserProfile) : null);
  });
}
