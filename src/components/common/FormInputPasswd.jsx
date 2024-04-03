import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import Msg from "./Msg";

const FormInputPasswd = ({
  id,
  placeholder,
  conf,
  errMsg,
  resErrMsg,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  return (
    <FormControl>
      <InputGroup>
        <Input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          id={id}
          {...conf}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleShowClick}>
            {showPassword ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Msg level="error">{errMsg}</Msg>
      <Msg level="error">{resErrMsg}</Msg>
    </FormControl>
  );
};

export default FormInputPasswd;
