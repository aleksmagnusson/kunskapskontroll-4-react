import React from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { authState } from "../stores/authorization/atom";
import { Link } from "react-router-dom";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

function Profile() {
  const { user } = useRecoilValue(authState);
  // Logga ut...
  const reset = useResetRecoilState(authState);

  if (!user) {
    return (
      <Box>
        <Text align="center" fontSize="large" fontWeight="black">
          ⚠️ Not signed in to profile. ⚠️
        </Text>
        <Button
          size="md"
          marginLeft="50%"
          marginTop="25px"
          bg="blue.400"
          color="white"
          _hover={{ bg: "blue.500" }}
          as={Link}
          to="/login"
        >
          Login
        </Button>
      </Box>
    );
  }
  console.log(user);

  return (
    <Box>
      <Heading fontStyle="italic" fontWeight="black" align="center">
        Welcome {user.username} !
      </Heading>
      <Box border="1px">
        <Heading>Profile</Heading>
        <Text>Email: {user.email}</Text>
        <Text>Username: {user.username}</Text>
        <Text color="white" _hover={{ color: "black" }}>
          Password: {user.password}
        </Text>
        <Text>Firstname: {user.name.firstname}</Text>
        <Text>Lastname:{user.name.lastname}</Text>
        <Text>City: {user.address.city}</Text>
        <Text>Street:{user.address.street}</Text>
        <Text>Zipcode: {user.address.zipcode}</Text>
        <Text>Number: {user.address.number}</Text>
        <Text>Phone: {user.phone}</Text>
        <Button
          size="md"
          bg="blue.400"
          color="white"
          _hover={{ bg: "blue.500" }}
          onClick={reset}
          as={Link}
          to="/"
        >
          Log out
        </Button>
      </Box>
    </Box>
  );
}
export default Profile;
