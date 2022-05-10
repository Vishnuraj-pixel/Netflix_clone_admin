import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { FormInput } from "../components";
import Container from "../assets/styles/LoginWrapper";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logo, Loading } from "../services/constants/contants";
import { loginUser, registerUser } from "../features/users/userSlice";

function Login() {
  const refContainer = useRef();
  const [values, setValues] = useState({
    username: "",
    password: "",
    adminCode: "",
    isAdmin: true,
  });
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, adminCode, isAdmin } = values;
    if (!username || !password || (!isAdmin && !adminCode)) {
      toast.error("Please fill out all fields");
    }
    if (isAdmin) {
      dispatch(loginUser({ username: username, password: password }));
      return;
    }
    dispatch(
      registerUser({
        username: username,
        password: password,
        admin_code: adminCode,
      })
    );
  };

  const toggleMember = () => {
    setValues({ ...values, isAdmin: !values.isAdmin });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/dashboard");
      });
    }
  });

  return (
    <>
      {isLoading ? (
        <div className="load">Loading...</div>
      ) : (
        <Container className="full-page">
          <form className="form" onSubmit={handleSubmit}>
            <Logo />
            <h3>{values.isAdmin ? "Login" : "Register"}</h3>
            <FormInput
              type="text"
              name="username"
              label="username"
              value={values.username}
              // refContainer={refContainer}
              handleChange={handleChange}
            />
            <FormInput
              type="text"
              name="password"
              label="password"
              value={values.password}
              // refContainer={refContainer}
              handleChange={handleChange}
            />
            {!values.isAdmin && (
              <FormInput
                type="text"
                name="adminCode"
                label="Admin Code"
                value={values.adminCode}
                // refContainer={refContainer}
                handleChange={handleChange}
              />
            )}

            <button type="submit" className="btn btn-red btn-lrge ">
              {values.isAdmin ? "Sign In" : "Sign up"}
            </button>
            <p>
              {values.isAdmin ? "Admin?" : "Already Admin?"}
              <button
                type="button"
                className="btn-red-color"
                onClick={toggleMember}
              >
                {values.isAdmin ? "Sign up" : "Sign In"}
              </button>
            </p>
          </form>
        </Container>
      )}
    </>
  );
}

export default Login;
