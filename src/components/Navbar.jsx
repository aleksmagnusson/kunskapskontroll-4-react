import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Box
      // position="fixed"
      // top="0px"
      // width="100%"
      bg="#900C3F"
      textColor="white"
      padding="3.5"
      display="flex-box"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack as="nav" direction="row" align="center">
        <Text
          as={Link}
          to="/"
          alt="logo"
          fontSize="30px"
          color="#FFC300"
          fontFamily="'Yellowtail', cursive;"
        >
          ProduitStore
        </Text>
        <Link to="/"> Home </Link>
        <Link to="/products">Products</Link>
        <Link to="/Cart">Cart</Link>

        <Link to="/Login">Login</Link>
      </Stack>
    </Box>
  );
}

/* Image
 <Image
 src="https://www.brainville.com/UserContent/CompanyLogotypes/22841/MailLogotype/MailLogotype.png"
 width="50px"
 height="50px"
 to="/"
 />
*/

/* Använder oss av Link och path från "react-router-dom".
 * Link länkar var på hemsidan man navigeras och därefter skickar användaren dit.
 * Path "/about" skickar oss till en specifik sida där det gör det enklare för användaren att se var vi är på hemsidan.
 */

export default Navbar;
