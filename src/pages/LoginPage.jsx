import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  Container,
  Text,
  Box,
  Heading,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Grid,
} from "@chakra-ui/react";

const LoginPage = () => {
  // Show x Hide password function in Chakra
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  // Insert Username / Password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // User settings | Current Profile(?)
  const [user, setUser] = useRecoilState(allUsers);
  const [currentUser, setCurrentUser] = useRecoilState(currentUser);

  // Navigering
  const navigate = useNavigate();
  // Get all products | Get cart from products
  const { getCart } = cartHook(useRecoilState);

  return (
    <Container>
      <Heading>
        <Text>Login</Text>
      </Heading>
      <Box>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type="text"
            placeholder="Enter username"
            onChange={(event) => setUsername(event.target.value)}
            value={username}
          />
        </InputGroup>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button type="submit">Login</Button>
      </Box>

      <Grid justifyItems="center" marginTop="4.5rem">
        <Text>Create new account?</Text>
        <Button
          onClick={() => {
            navigate("/CreateAccount");
          }}
        >
          Create new account
        </Button>
      </Grid>
    </Container>
  );
};
export default LoginPage;
