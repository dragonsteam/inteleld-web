import { FormControl, Textarea, Text } from "@chakra-ui/react";
import Msg from "./Msg";

const FormTextarea = ({ id, label, placeholder, conf, errMsg, resErrMsg }) => {
  return (
    <FormControl>
      <Text>{label}</Text>
      <Textarea placeholder={placeholder} id={id} {...conf} />
      <Msg level="error">{errMsg}</Msg>
      <Msg level="error">{resErrMsg}</Msg>
    </FormControl>
  );
};

export default FormTextarea;
