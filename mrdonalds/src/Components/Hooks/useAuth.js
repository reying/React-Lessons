import { useEffect, useState } from 'react';

export function useAuth(authFirebase) {
  const [authentification, setAuthentication] = useState(null);

  const auth = authFirebase();
  const provider = new authFirebase.GoogleAuthProvider();

  const logIn = () => auth.signInWithPopup(provider);

  const logOut = () => auth.signOut()
    .catch(err => console.error())

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        setAuthentication(user);
      } else {
        setAuthentication(null);
      }
    });
  }, [authentification]);

  return { authentification, logIn, logOut };
}