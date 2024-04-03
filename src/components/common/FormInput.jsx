import { FormControl, Input, Text } from "@chakra-ui/react";
import Msg from "./Msg";

const FormInput = ({
  id,
  label,
  type,
  placeholder,
  conf,
  errMsg,
  resErrMsg,
}) => {
  return (
    <FormControl>
      <Text>{label}</Text>
      <Input type={type} placeholder={placeholder} id={id} {...conf} />
      <Msg level="error">{errMsg}</Msg>
      <Msg level="error">{resErrMsg}</Msg>
    </FormControl>
  );
};

export default FormInput;
