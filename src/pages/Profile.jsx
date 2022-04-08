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
      <Heading
        fontStyle="italic"
        fontWeight="black"
        align="center"
        marginTop="2vh"
      >
        Welcome {user.username}!
      </Heading>
      <Box align="center">
        <Heading margin="1vh" fontStyle="italic">
          Profile
        </Heading>
        <Text fontSize="2xl">Email: {user.email}</Text>
        <Text fontSize="2xl">Username: {user.username}</Text>
        <Text fontSize="2xl" color="white" _hover={{ color: "black" }}>
          Password: {user.password}
        </Text>
        <Text fontSize="2xl">Firstname: {user.name.firstname}</Text>
        <Text fontSize="2xl">Lastname:{user.name.lastname}</Text>
        <Text fontSize="2xl">City: {user.address.city}</Text>
        <Text fontSize="2xl">Street:{user.address.street}</Text>
        <Text fontSize="2xl">Zipcode: {user.address.zipcode}</Text>
        <Text fontSize="2xl">Street Number: {user.address.number}</Text>
        <Text fontSize="2xl">Phone: {user.phone}</Text>
        <Button
          marginTop="25px"
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
