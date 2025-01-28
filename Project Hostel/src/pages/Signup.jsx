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
import MultiStepForm from "../components/MultistepForm";
const SignupPage = () => {
  return (
    <AuthLayout>
      {/* <div className="flex items-center justify-center w-screen h-[90vh]">
        <div className="w-4/5 md:w-2/5">
          <Card className="flex flex-col shadow-lg bg-gray-50 h-1/2">
            <CardHeader
              floated={false}
              shadow={false}
              variant="gradient"
              color="gray"
              className="flex flex-col items-center px-2 rounded-none justify-evenly"
            >
              <div>
                <Typography className="mb-2 text-2xl font-semibold text-black font-poppins">
                  Hostel stay
                </Typography>
              </div>

              <div>
                <Typography className="text-lg font-semibold text-black font-poppins">
                  Register your Hostel
                </Typography>
              </div>
            </CardHeader>
            <div>
              <CardBody className="flex flex-col gap-4">
                <div className="flex flex-col w-1/2 gap-y-3">
                  <Input label="Name" type="text" />
                  <Input label="Email" type="email" />
                  <Input label="Password" type="password" />
                  <Input
                    label="Phone Number"
                    type="text"
                    maxLength={10}
                    pattern="^[0-9]{10}$"
                  />
                  <input type="email" placeholder="Ph. no." />
                </div>
              </CardBody>
              <CardFooter className="pt-0">
                <Button fullWidth>Sign In</Button>
                <div className="flex ">
                  <Typography className="flex justify-center mt-6 text-xs">
                    Have an account?
                    <Typography
                      as="a"
                      href="#signup"
                      variant="small"
                      color="blue-gray"
                      className="ml-1 text-xs font-bold"
                    >
                      Login
                    </Typography>
                  </Typography>
                </div>
              </CardFooter>
            </div>
          </Card>
        </div>
      </div> */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <MultiStepForm />
      </div>
    </AuthLayout>
  );
};

export default SignupPage;
