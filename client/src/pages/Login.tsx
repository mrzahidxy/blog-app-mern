import { ErrorMessage, Field, Form, Formik, FormikValues } from "formik";
import * as Yup from "yup";
// import mainBanner from "../../assets/images/main-banner.jpg";
// import { publicRequest } from "../../utils/requestMethod";
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "../services/requestMethod";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  //   const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
  };

  const handleSubmit = async (
    values: FormikValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      setSubmitting(true);
      const res = await publicRequest.post("/auth/login", values);
      //   dispatch({
      //     type: "LOGIN",
      //     payload: res.data,
      //   });
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      <div className="flex flex-col shadow-md p-10">
        <div className="text-3xl font-semibold text-blue-400">Bloggy</div>
        <div className="flex flex-col">
          <span className="text-xl font-semibold text-gray-800">Login</span>
          <span className="text-sm text-gray-600">
            Welcome Back, Your friends are waiting for you!
          </span>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-1 w-80">
                <div className="space-x-2 grid grid-cols-4">
                  <label htmlFor="email" className="text-gray-800">
                    Username:
                  </label>
                  <Field
                    name="username"
                    placeholder="Enter your username"
                    className="col-span-3 py-1 border rounded-sm outline-none pl-2 focus:border-blue-600"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="col-start-2 col-span-3 text-red-500"
                  />
                </div>
                <div className="space-x-2 grid grid-cols-4">
                  <label htmlFor="password" className="text-gray-800">
                    Password:
                  </label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="col-span-3 py-1 border rounded-sm outline-none pl-2 focus:border-blue-600"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="col-start-2 col-span-3 text-red-500"
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-400 text-white px-8 py-1 rounded-sm"
                  >
                    {isSubmitting ? "Loading...." : "Login"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
