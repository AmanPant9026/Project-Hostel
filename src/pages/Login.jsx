import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button
} from "@material-tailwind/react";
import Footer from "../components/Footer";
import Layout from "../Layouts/Layout";
import AuthLayout from "../Layouts/AuthLayout";
const Login = () => {
  return (
    <AuthLayout>
      <div className="flex items-center justify-center w-screen h-[90vh]">
        <div className="w-4/5 md:w-1/2">
          <Card className="flex flex-col shadow-lg md:flex-row bg-gray-50 h-1/2">
            <CardHeader
              floated={false}
              variant="gradient"
              color="gray"
              className="flex items-center justify-center mb-4 bg-opacity-50 bg-center bg-no-repeat bg-cover md:w-1/2 place-items-center bg-login s-md:h-[10vh] "
            >
              <div className="flex items-center justify-center w-full h-full bg-white bg-opacity-35">
                <Typography className="text-2xl font-semibold text-black font-poppins">
                  Hostel stay
                </Typography>
              </div>
            </CardHeader>

            <div className="md:w-1/2">
              <CardBody className="flex flex-col gap-4 -ml-5">
                <div className="flex items-center justify-center">
                  <Typography
                    variant="h3"
                    color="black"
                    className="font-poppins"
                  >
                    Login
                  </Typography>
                </div>
                <div className="flex flex-col gap-y-2">
                  {/* <Input label="Email" /> */}
                  <input
                    label="Email"
                    placeholder="E-mail"
                    type="email"
                    className="px-2 py-2 text-sm rounded-md outline-blue-gray-300 outline outline-1 focus:outline-2 focus:outline-blue-gray-600 placeholder:text-blue-gray-400"
                  />
                  <input
                    label="password"
                    placeholder="Your Password"
                    type="password"
                    className="px-2 py-2 text-sm rounded-md outline-blue-gray-300 outline outline-1 focus:outline-2 focus:outline-blue-gray-600 placeholder:text-blue-gray-400"
                  />
                </div>
              </CardBody>
              <CardFooter className="pt-0 -ml-5">
                <Button fullWidth>Sign In</Button>
                <div className="flex ">
                  <Typography className="flex justify-center mt-6 text-xs">
                    Don&apos;t have an account?
                    <Typography
                      as="a"
                      href="#signup"
                      variant="small"
                      color="blue-gray"
                      className="ml-1 text-xs font-bold"
                    >
                      Sign up
                    </Typography>
                  </Typography>
                </div>
              </CardFooter>
            </div>
          </Card>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
