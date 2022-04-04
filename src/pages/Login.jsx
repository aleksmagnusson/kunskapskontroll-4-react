import react, { useState } from "react";
import { Link } from "react-router-dom";
import authState from "../stores/authorization/atom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  Flex,
  Stack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [_, setAuth] = useRecoilState(authState);

  const navigate = useNavigate();

  function login(username, password) {
    axios
      .post("https://k4backend.osuka.dev/auth/login", {
        username: username,
        password: password,
      })

      .then((res) => {
        axios
          .get(`https://k4backend.osuka.dev/users/${res.data.userId}`)
          .then((userData) => {
            setAuth({
              user: userData.data,
              token: res.data.token,
            });
            navigate("/profile");
          });
      });
  }

  return (
    <Flex
      minH={"50vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <div onSubmit={(e) => e.preventDefault()}>
              <FormControl id="usename">
                <FormLabel>Username</FormLabel>

                <Input
                  type="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>

                <Input
                  /*type="password" */ placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Link to="/register" color={"blue.400"}>
                    Register new user?
                  </Link>
                </Stack>

                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  // Login use props to get usename/password.
                  onClick={() => login(username, password)}
                >
                  Login
                </Button>
              </Stack>
            </div>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Login;
