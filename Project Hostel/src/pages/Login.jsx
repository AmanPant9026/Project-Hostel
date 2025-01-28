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
        <div className="w-4/5 md:w-2/5">
          <Card className="flex flex-col shadow-lg md:flex-row bg-gray-50 h-1/2">
            <CardHeader
              floated={false}
              variant="gradient"
              color="gray"
              className="flex items-center justify-center mb-4 bg-opacity-50 bg-center bg-no-repeat bg-cover md:w-1/2 place-items-center bg-login s-md:h-[10vh] "
            >
              <div className="flex items-center justify-center w-full h-full bg-white bg-opacity-35">
                <Typography className="text-3xl font-semibold text-black font-poppins">
                  Hostel stay
                </Typography>
              </div>
            </CardHeader>

            <div className="md:w-1/2">
              <CardBody className="flex flex-col gap-4">
                <div className="flex items-center justify-center">
                  <Typography
                    variant="h3"
                    color="black"
                    className="font-poppins"
                  >
                    Login
                  </Typography>
                </div>

                <Input label="Email" size="md" />
                <Input label="Password" size="md" />
              </CardBody>
              <CardFooter className="pt-0">
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
