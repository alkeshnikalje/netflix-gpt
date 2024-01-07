import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { validateEmailAndPassword } from "../../utils/validateEmailAndPassword";
const bgImage = {
  backgroundImage:
    "linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url(https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg)",
};
function SigninSignup() {
  const [isSignupForm, setIsSignupForm] = useState(false);
  const [error, setError] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    if (isSignupForm) {
      const isValid = validateEmailAndPassword(
        email.current.value,
        password.current.value
      );
      if (isValid !== null) {
        setError(isValid);
        return;
      }

      console.log(email.current.value);
      console.log(password.current.value);
    }
  };

  return (
    <div className="h-[100vh]" style={bgImage}>
      <div className="h-14 w-40 ml-10 pt-2 bg-gradient-to-b from-black shadow-sm">
        <Link to="/">
          <img
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
          />
        </Link>
      </div>

      <form
        className="bg-black mt-8 w-[23%] mx-auto p-14 opacity-95"
        onSubmit={handleSubmit}
      >
        <p className="text-xl text-white mb-4">
          {!isSignupForm ? "Sign In" : "Sign Up"}
        </p>
        <div className="flex flex-col gap-3 mb-7">
          {isSignupForm && (
            <div className="w-full">
              <input
                ref={name}
                type="text"
                placeholder="Full name"
                className="w-full bg-gray-800 focus:outline-none text-sm text-white placeholder:text-gray-400 placeholder:text-sm placeholder:font-semibold px-3 py-2 rounded-sm"
              />
            </div>
          )}
          <div className="w-full">
            <input
              ref={email}
              type="text"
              placeholder="Email"
              className="w-full bg-gray-800 focus:outline-none text-sm text-white placeholder:text-gray-400 placeholder:text-sm placeholder:font-semibold px-3 py-2 rounded-sm"
            />
          </div>

          <div className="w-full">
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="w-full bg-gray-800 focus:outline-none text-sm text-white placeholder:text-gray-400 placeholder:text-sm placeholder:font-semibold px-3 py-2 rounded-sm"
            />
          </div>
        </div>

        <button className="text-sm bg-[#E50914] text-white font-bold w-full py-2 rounded-sm mb-9">
          {!isSignupForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-[#E50914]">{error}</p>
        <p className="text-gray-400 mt-12 mb-9 text-sm">
          {!isSignupForm ? "New to netflix-gpt?" : "Already a user?"}
          <span
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
