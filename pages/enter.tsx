import { signInWithPopup } from "firebase/auth";

import { auth, googleAuthProvider } from "../library/firebase";

const EnterPage = () => {
  const user = false;
  const username = false;

  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
};

const SignInButton = () => {
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleAuthProvider);
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={"/google.png"} /> Sign in with Google
    </button>
  );
};

const UsernameForm = () => {
  return <div></div>;
};

const SignOutButton = () => {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
};

export default EnterPage;
