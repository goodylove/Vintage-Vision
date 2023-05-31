import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from '@material-tailwind/react';

export default function Login() {
  const initialState = {
    name: '',
    password: '',
    img: '',
  };

  const [loginInfo, setLoginInfo] = useState(initialState);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
    console.log(name, value);
  };
  return (
    <div className="w-full  flex justify-center items-center mt-10 h-[100vh]">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Name"
            size="lg"
            name="name"
            value={loginInfo.name}
            onChange={handleInputChange}
          />
          <Input
            label="Password"
            size="lg"
            name="password"
            value={loginInfo.password}
            onChange={handleInputChange}
          />
          <Input
            label="Image-Url"
            size="lg"
            name="img"
            value={loginInfo.img}
            onChange={handleInputChange}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth color="gray">
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Image is optional
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue"
              className="ml-1 font-bold"
            >
              Sign up
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}
