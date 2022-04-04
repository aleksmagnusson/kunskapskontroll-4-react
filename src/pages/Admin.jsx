import React from "react";
import { authState } from "../stores/authorization/atom";
import productState from "../stores/products/atom";
import { userState } from "../stores/users/atom";
import { Box, Image, Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";

function Admin() {
  // Hämta users och produkter.
  const products = useRecoilValue(productState);
  const users = useRecoilValue(userState);
  const { user } = useRecoilValue(authState);

  if (!user) {
    return (
      <Text align="center" fontSize="large" fontWeight="black">
        {" "}
        ⚠️ You need to log in to see data. ⚠️
      </Text>
    );
  }

  if (user.role === "user") {
    return (
      <Text align="center" fontSize="large" fontWeight="black">
        {" "}
        ⚠️ You do not have access to this data. ⚠️
      </Text>
    );
  }

  return (
    <Box border="1px">
      {products.map((product) => {
        return (
          <Box border="1px" key={product.id} to={`/product/${product.id}`}>
            <Image src={product.image} />
            <Text>{product.title}</Text>
            <Text>{product.price}</Text>
          </Box>
        );
      })}

      {users.map((user) => {
        return (
          <Box>
            <Box key={users}>
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
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default Admin;
