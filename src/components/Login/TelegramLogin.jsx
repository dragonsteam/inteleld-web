import { HStack, Button, Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import TelegramLoginButton from "telegram-login-button";
import useRequest from "../../hooks/useRequest";

// const fake_data = {
//   id: 992519627,
//   first_name: "Nick",
//   last_name: "Wild",
//   username: "NickPhilomath",
//   photo_url:
//     "https://t.me/i/userpic/320/Sn5-VT8K0XDt-4JjI5sLB_gv3u0Ew5R0ad04INgSfKo.jpg",
//   auth_date: 1710273247,
//   hash: "fb5d7282d4c99beb23d2bb1c4f9f987ed1b0290b7dedf2014f6922d2ef05d2ec",
// };

const TelegramLogin = () => {
  const navigate = useNavigate();
  const { post, isLoading, errorMsg } = useRequest({ url: "/token/telegram/" });

  const handleTelegramRequest = (user) => {
    console.log("telegram user", user);
    post({
      data: user,
      callback: (data) => {
        console.log("auth data", data);
        // queryClient.setQueryData("auth", data);
        localStorage.setItem("auth", JSON.stringify(data));
        navigate("/");
      },
    });
  };

  return (
    <Box>
      <Box>
        <TelegramLoginButton
          className="telegram-button"
          botName="oeliksbot"
          dataOnauth={(user) => handleTelegramRequest(user)}
        />
        {/* <Button
          // variant="outline"
          onClick={() => {
            handleTelegramRequest(fake_data);
          }}
        >
          submit fake data
        </Button> */}
      </Box>
      {errorMsg && (
        <Text fontSize={15} color="tomato" mt={5}>
          {errorMsg}
        </Text>
      )}
    </Box>
  );
};

export default TelegramLogin;
