import { FormControl, Select, Text } from "@chakra-ui/react";
import Msg from "./Msg";

const FormSelect = ({
  id,
  label,
  placeholder,
  conf,
  children,
  errMsg,
  resErrMsg,
}) => {
  return (
    <FormControl>
      <Text>{label}</Text>
      <Select placeholder={placeholder} id={id} {...conf}>
        {children}
      </Select>
      <Msg level="error">{errMsg}</Msg>
      <Msg level="error">{resErrMsg}</Msg>
    </FormControl>
  );
};

export default FormSelect;
