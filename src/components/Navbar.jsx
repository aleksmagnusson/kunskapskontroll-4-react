import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Box
      // position="fixed"
      // top="0px"
      // width="100%"
      bg="#FFFFFF"
      textColor="black"
      padding="4"
      display="flex-box"
      justifyContent="space-between"
      alignItems="center"
      marginLeft="5"
    >
      <Stack as="nav" direction="row" align="center">
        <Text
          as={Link}
          to="/"
          alt="logo"
          fontSize="30px"
          color="#000000"
          fontFamily="'Yellowtail', cursive;"
          marginRight="5"
        >
          ProduitStore
        </Text>
        <Link to="/">Home</Link>

        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>

        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>

        <Link to="/profile">Profile</Link>
        <Link to="/admin">Admin</Link>
      </Stack>
    </Box>
  );
}

/* Använder oss av Link och path från "react-router-dom".
 * Link länkar var på hemsidan man navigeras och därefter skickar användaren dit.
 * Path "/about" skickar oss till en specifik sida där det gör det enklare för användaren att se var vi är på hemsidan.
 */

export default Navbar;
