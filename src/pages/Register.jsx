import React, { useState } from "react";
import { useRecoilState } from "recoil";
import authState from "../stores/authorization/atom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputRightElement,
  Stack,
  useColorModeValue,
  HStack,
  InputGroup,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function Register() {
  const [auth, setAuth] = useRecoilState(authState);

  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    name: {
      firstname: "",
      lastname: "",
    },
    adress: {
      city: "",
      street: "",
      number: "",
      zipcode: "",
    },
    phone: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // Hämta användare från backend när man väl ska logga in.
    axios.post("https://k4backend.osuka.dev/users", user).then((response) => {
      axios
        .post("https://k4backend.osuka.dev/auth/login", {
          username: response.data.username,
          password: response.data.password,
        })
        .then((response) => {
          axios
            .get(`https://k4backend.osuka.dev/users${response.data.userId}`)
            .then((userData) => {
              // Console.log(användardata som man hämtar från registreringen).
              console.log(userData.data);

              setAuth({
                user: userData.data,
                token: response.data.token,
              });
            });
        });
      //  navigate("/"); // lägg till vilken länk den ska till.
    });
  };

  return (
    <Flex
      minH={"50vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={7} mx={"auto"} maxW={"lg"} py={10} px={4}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Register new user
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <div onSubmit={(e) => e.preventDefault()}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="E-mail"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </FormControl>
              <HStack>
                <Box>
                  <FormControl id="username">
                    <FormLabel>Username</FormLabel>
                    <InputGroup>
                      <Input
                        type="username"
                        placeholder="Username"
                        value={user.username}
                        onChange={(e) =>
                          setUser({ ...user, username: e.target.value })
                        }
                      />
                    </InputGroup>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        type="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={(e) =>
                          setUser({ ...user, password: e.target.value })
                        }
                      />
                    </InputGroup>
                  </FormControl>
                </Box>
              </HStack>

              <HStack>
                <Box>
                  <FormControl id="firstName">
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="First name"
                      value={user.name.firstname}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          name: { ...user.name, firstname: e.target.value },
                        })
                      }
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>

                    <Input
                      type="text"
                      placeholder="Last name"
                      value={user.name.lastname}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          name: { ...user.name, lastname: e.target.value },
                        })
                      }
                    />
                  </FormControl>
                </Box>
              </HStack>
              <Box>
                <FormControl id="city">
                  <FormLabel>City</FormLabel>
                  <Input
                    type="text"
                    placeholder="City"
                    value={user.adress.city}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        adress: { ...user.adress, city: e.target.value },
                      })
                    }
                  />
                </FormControl>
                <FormControl id="street">
                  <FormLabel>Street</FormLabel>
                  <Input
                    type="text"
                    placeholder="Street"
                    value={user.adress.street}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        adress: { ...user.adress, street: e.target.value },
                      })
                    }
                  />
                </FormControl>
                <HStack>
                  <Box>
                    <FormControl id="zipcode">
                      <FormLabel>Zipcode</FormLabel>
                      <Input
                        type="text"
                        placeholder="Zipcode"
                        value={user.adress.zipcode}
                        onChange={(e) =>
                          setUser({
                            ...user,
                            adress: { ...user.adress, zipcode: e.target.value },
                          })
                        }
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="street number">
                      <FormLabel>Street number</FormLabel>
                      <Input
                        type="text"
                        placeholder="Street number"
                        value={user.adress.number}
                        onChange={(e) =>
                          setUser({
                            ...user,
                            adress: { ...user.adress, number: e.target.value },
                          })
                        }
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <Box>
                  <FormControl id="phone">
                    <FormLabel>Phone</FormLabel>
                    <Input
                      type="number"
                      placeholder="Phone"
                      value={user.phone}
                      onChange={(e) =>
                        setUser({ ...user, phone: e.target.value })
                      }
                    />
                  </FormControl>
                </Box>
              </Box>

              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{ bg: "blue.500" }} // Register with all the data you put in to the field.
                  onClick={handleSubmit}
                >
                  Register
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link to="/login" color={"blue.400"}>
                    Login
                  </Link>
                </Text>
              </Stack>
            </div>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Register;
