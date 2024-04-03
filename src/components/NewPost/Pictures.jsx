import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Progress, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import { TbCameraPlus } from "react-icons/tb";
import { baseUrl } from "../../services/api-client";
import useRequest from "../../hooks/useRequest";

const Pictures = ({ pictures = [], onNewPicture }) => {
  const [t, i18n] = useTranslation("global");
  const { post, isLoading } = useRequest({
    url: "/advertisements/images/new",
    redirectOn401: true,
    appendAuth: true,
  });

  // const [pictures, setPictures] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInput = useRef(null);

  const handlePicChose = (e) => {
    const fd = new FormData();
    fd.append("image", e.target.files[0], e.target.files[0].name);
    // reset file input
    fileInput.current.value = null;

    post({
      data: fd,
      callback: (data) => {
        console.log(data);
        // inform NewPost component that pictures has changed
        onNewPicture(data);
      },
      uploadHandler: (e) => {
        setUploadProgress(Math.round((e.loaded / e.total) * 100));
      },
    });
  };

  return (
    <Box>
      <Text>pictures</Text>
      <input
        type="file"
        ref={fileInput}
        style={{ display: "none" }}
        onChange={(e) => {
          handlePicChose(e);
        }}
      />
      <Grid
        // templateColumns="repeat(4, 1fr)"
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={2}
        mt={2}
      >
        {pictures.map((pic, index) => {
          if (!pic.url)
            return (
              <GridItem
                key={pic.id}
                w="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  w="100%"
                  aspectRatio={16 / 9}
                  src={baseUrl + pic.image}
                  objectFit="cover"
                  // h={150}
                  borderRadius={4}
                  alt="ad-pic"
                />
              </GridItem>
            );
        })}
        <GridItem
          w="100%"
          // h={150}
          aspectRatio={16 / 9}
          borderRadius={4}
          border="1px solid grey"
          boxShadow="md"
          cursor="pointer"
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={() => {
            fileInput.current.click();
          }}
        >
          <TbCameraPlus size={40} />
        </GridItem>
      </Grid>
      {isLoading && (
        <Progress hasStripe value={uploadProgress} mt={5} borderRadius={5} />
      )}
    </Box>
  );
};

export default Pictures;
