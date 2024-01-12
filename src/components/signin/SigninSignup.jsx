import React, { useState, useRef } from "react";

import { validateEmailAndPassword } from "../../utils/validateEmailAndPassword";
import { createUser, signInUser, updateUser } from "../../utils/authOperations";
import { useDispatch } from "react-redux";
import { addUser } from "../user/userSlice";
import Header from "../ui/Header";

const bgImage = {
  backgroundImage:
    "linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url(https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg)",
};
function SigninSignup() {
  const dispatch = useDispatch();

  const [isSignupForm, setIsSignupForm] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const imgUrl = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignupForm) {
        if (
          !name?.current.value ||
          !email?.current.value ||
          !password?.current.value
        )
          return;

        const isValid = validateEmailAndPassword(
          email.current.value,
          password.current.value
        );
        setError(isValid);
        if (isValid !== null) return;
        setIsLoading(true);
        const userCredential = await createUser(
          email.current.value,
          password.current.value
        );
        const user = userCredential.user;

        const updatedUser = await updateUser(
          name.current.value,
          imgUrl.current.value
        );

        const { displayName, photoURL, uid } = updatedUser;

        dispatch(addUser({ displayName, photoURL, uid }));

        name.current.value = null;
        email.current.value = null;
        password.current.value = null;
        imgUrl.current.value = null;
      }
      if (!email.current.value || !password.current.value) return;
      setError(null);
      setIsLoading(true);
      const userCredential = await signInUser(
        email.current.value,
        password.current.value
      );
      const user = userCredential.user;
      const { displayName, photoURL, uid } = user;
      dispatch(addUser({ displayName, photoURL, uid }));

      email.current.value = null;
      password.current.value = null;
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[100vh]" style={bgImage}>
      <Header />
      <form
        className="bg-black mt-8 w-[23%] mx-auto p-14 bg-opacity-85"
        onSubmit={handleSubmit}
      >
        <p className="text-xl text-white mb-4">
          {!isSignupForm ? "Sign In" : "Sign Up"}
        </p>
        <div className="flex flex-col gap-4 mb-8">
          {isSignupForm && (
            <div className="w-full">
              <input
                disabled={isLoading}
                ref={name}
                type="text"
                placeholder="Full name"
                className="w-full bg-gray-800 focus:outline-none text-sm text-white placeholder:text-gray-400 placeholder:text-sm placeholder:font-semibold px-3 py-2 rounded-sm"
              />
            </div>
          )}
          <div className="w-full">
            <input
              disabled={isLoading}
              ref={email}
              type="text"
              placeholder="Email"
              className="w-full bg-gray-800 focus:outline-none text-sm text-white placeholder:text-gray-400 placeholder:text-sm placeholder:font-semibold px-3 py-2 rounded-sm"
            />
          </div>

          <div className="w-full">
            <input
              disabled={isLoading}
              ref={password}
              type="password"
              placeholder="Password"
              className="w-full bg-gray-800 focus:outline-none text-sm text-white placeholder:text-gray-400 placeholder:text-sm placeholder:font-semibold px-3 py-2 rounded-sm"
            />
          </div>
          {isSignupForm && (
            <div className="w-full">
              <input
                disabled={isLoading}
                ref={imgUrl}
                type="text"
                placeholder="Profile image url"
                className="w-full bg-gray-800 focus:outline-none text-sm text-white placeholder:text-gray-400 placeholder:text-sm placeholder:font-semibold px-3 py-2 rounded-sm"
              />
            </div>
          )}
        </div>

        <button
          className="text-sm bg-[#E50914] text-white font-bold w-full py-2 rounded-sm mb-9"
          disabled={isLoading}
        >
          {!isSignupForm ? "Sign In" : "Sign Up"}
        </button>

        {isLoading ? (
          <div className="pl-28">
            <div class="loader ease-linear rounded-full border-4 border-t-4 border-t-gray-500 border-gray-200 h-6 w-6 animate-spin"></div>
          </div>
        ) : (
          <p className="text-[#E50914]">{error}</p>
        )}
        <p className="text-gray-400 mt-12 mb-9 text-sm">
          {!isSignupForm ? "New to netflix-gpt?" : "Already a user?"}
          <span
            disabled={isLoading}
            className="text-white text-sm cursor-pointer hover:underline"
            onClick={() => setIsSignupForm((prev) => !prev)}
          >
            {!isSignupForm ? "Sign Up now" : "Sign In now"}
          </span>
        </p>
      </form>
    </div>
  );
}

export default SigninSignup;
