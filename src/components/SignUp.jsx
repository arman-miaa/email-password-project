import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { auth } from "../firebase.init";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [errorMessage, setErroMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword,setShowPassword] = useState(false)
    // console.log(errorMessage);

  const handleSinUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    console.log(name, photo,email, password,terms);
    setErroMessage('')
    setSuccess(false)
    
    if (password.length < 6) {
      setErroMessage('Password shoud be 6 characters or longer')
      return;
    }
    if (!terms) {
      setErroMessage('Please accept our terms and condition')
      return;
    }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    
    if (!passwordRegex.test(password)) {
      setErroMessage('At least one uppercase, one lowercase, one number, one special character')
      return;
      
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);

        // send verification email address
        sendEmailVerification(auth.currentUser)
          .then(() => {
            console.log('verification email sent');
            // setSuccess(true)
            
          });
        // update Profile name and photo url
        const profile = {
          displayName: name,
          photoURL: photo,
        }
        updateProfile(auth.currentUser, profile)
          .then(() => {
          console.log('user profile updated');
          })
        .catch((error)=>console.log('user profile update error'))
      })
      .catch((error) => setErroMessage(error.message));
    setSuccess(false)
    
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSinUp} className="card-body">
              <h1 className="text-5xl font-bold">SignUp now!</h1>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn btn-xs absolute right-4 top-12"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye></FaEye>}
                </button>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label justify-start  cursor-pointer">
                  <input type="checkbox" name="terms" className="checkbox " />
                  <span className="label-text ml-2">
                    Accept Our Terms And Condition
                  </span>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            {errorMessage && <p className="text-red-800">{errorMessage}</p>}
            {success && <p className="text-green-700">Sign up in successful</p>}
            <p>
              Already have an accout? please <Link to="/login">Login</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
