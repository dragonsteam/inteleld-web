import { Box, Image, Text } from "@chakra-ui/react";
import TimeAgo from "react-timeago";

const AdCard = ({ ad }) => {
  return (
    <Box>
      <Box boxShadow="md" borderRadius={10}>
        <Image
          aspectRatio={16 / 9}
          w="100%"
          borderRadius={10}
          objectFit="cover"
          src={ad.image}
          alt="ad-pic"
        />
      </Box>
      <Box p={2}>
        <Text noOfLines={[1, 2]} maxWidth={250}>
          {ad.title}
        </Text>
        <Text fontWeight="bold">
          {ad.price} {ad.currency}
        </Text>
        <Text fontSize="sm">address, home, city</Text>
        <Text fontSize="sm">
          <TimeAgo date={ad.date_posted} />
        </Text>
      </Box>
    </Box>
  );
};

export default AdCard;
