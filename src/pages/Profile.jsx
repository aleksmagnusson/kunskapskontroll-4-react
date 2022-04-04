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
      <Text align="center" fontSize="large" fontWeight="black">
        ⚠️ Not signed in to profile. ⚠️
      </Text>
    );
  }
  console.log(user);

  return (
    <Box>
      <Heading>{User} Profile</Heading>
      <Text>{user.email}</Text>
      <Text>{user.username}</Text>
      <Text>{user.password}</Text>
      <Text>{user.name.firstname}</Text>
      <Text>{user.name.lastname}</Text>
      <Text>{user.address.city}</Text>
      <Text>{user.address.street}</Text>
      <Text>{user.address.zipcode}</Text>
      <Text>{user.address.number}</Text>
      <Text>{user.phone}</Text>
      <Button size="sm" _hover="primary" onClick={reset}>
        Log out
      </Button>
    </Box>
  );
}
export default Profile;
