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
const Login = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="w-1/2 ">
        <Card className="flex flex-row shadow-lg bg-gray-50 h-1/2">
          <CardHeader
            floated={false}
            variant="gradient"
            color="gray"
            className="flex items-center justify-center w-1/2 mb-4 bg-opacity-50 bg-center bg-no-repeat bg-cover place-items-center bg-login"
          >
            <div className="flex items-center justify-center w-full h-full bg-white bg-opacity-35">
              <Typography variant="h2" className="text-black font-poppins">
                Hostel stay
              </Typography>
            </div>
          </CardHeader>

          <div className="w-1/2">
            <CardBody className="flex flex-col gap-4">
              <div className="flex items-center justify-center">
                <Typography variant="h3" color="black" className="font-poppins">
                  Login
                </Typography>
              </div>

              <Input label="Email" size="lg" />
              <Input label="Password" size="lg" />
              <div className="-ml-2.5">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button fullWidth>Sign In</Button>
              <Typography variant="small" className="flex justify-center mt-6">
                Don&apos;t have an account?
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Typography>
            </CardFooter>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
