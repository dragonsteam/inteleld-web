import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Text, Box, Button, Stack, Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import useRequest from "../../hooks/useRequest";
import { getErrorMsg } from "../../util";
import SpinnerButton from "../common/SpinnerButton";
import FormInput from "../common/FormInput";
import FormSelect from "../common/FormSelect";
import FormTextarea from "../common/FormTextarea";
import Pictures from "./Pictures";
import Footer from "../Footer/Footer";

export const schema = z.object({
  // truck: z.number({ invalid_type_error: "Truck is required" }).positive(),
  title: z.string().min(16).max(70),
  description: z.string(),
  // exchange_method: z.string(),
  price: z.string(),
  currency: z.string(),
  // pictures: z.array(
  //   z.object({
  //     id: z.number(),
  //     image: z.string(),
  //   })
  // ),
  // currency: z.string(),
  // is_auto_renew: z.boolean(),
});

const NewPost = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // first of all check if user is actually authorized
    const auth = localStorage.getItem("auth");
    if (!auth) navigate("/login");
  }, []);

  const [t, i18n] = useTranslation("global");
  const { post, isLoading, errorMsg, resErrors } = useRequest({
    url: "/advertisements/",
    redirectOn401: true,
    appendAuth: true,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [pictures, setPictures] = useState([]);

  const onNewPicture = (pic) => {
    setPictures([...pictures, pic]);
    // schema.shape.pictures.parse([[...pictures, pic]]);
    // register("pictures").setPictures([...pictures, pic]);
    // schema.parse({ ...schema.data, pictures: [pictures] });
    // console.log("schema.data", schema.getQueryData());
  };

  const onSubmit = (data) => {
    // combine data with pictures
    const newPicData = pictures.map((pic) => pic.id);
    const newData = { ...data, pictures: newPicData };

    console.log("new post data*", newData);
    post({
      data: newData,
      callback: () => {
        reset();
        navigate("/");
      },
    });
  };

  return (
    <Box>
      <Box maxW="69rem">
        <Heading size="lg" mb={5}>
          {t("newpost.header")}
        </Heading>
        <form id="new-post-form" onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <FormInput
              label={t("newpost.form.title")}
              type="text"
              placeholder={t("newpost.form.title_ph")}
              id="title"
              conf={register("title")}
              errMsg={errors.title?.message}
              resErrMsg={getErrorMsg(resErrors, "title")}
            />
            <Pictures pictures={pictures} onNewPicture={onNewPicture} />
            <FormTextarea
              label={"Description*"}
              placeholder={t("newpost.form.about_ph")}
              id="description"
              conf={register("description")}
              errMsg={errors.about?.message}
              resErrMsg={getErrorMsg(resErrors, "description")}
            />
            <FormInput
              label={t("newpost.form.price")}
              type="number"
              id="price"
              conf={register("price")}
              errMsg={errors.price?.message}
              resErrMsg={getErrorMsg(resErrors, "price")}
            />
            <FormSelect
              id="currency"
              label={t("newpost.form.currency")}
              conf={register("currency")}
              errMsg={errors.currency?.message}
              resErrMsg={getErrorMsg(resErrors, "currency")}
            >
              <option value="UZS">Uzbek Sums</option>
              <option value="USD">US Dollars</option>
              <option value="RUB">Russian Rubles</option>
            </FormSelect>
          </Stack>
          {errorMsg && (
            <Text fontSize={15} color="tomato">
              {errorMsg}
            </Text>
          )}
        </form>
        <Box mt={7}>
          {isLoading ? (
            <SpinnerButton />
          ) : (
            <Button
              disabled={!isValid}
              type="submit"
              form="new-post-form"
              colorScheme="blue"
            >
              {t("common.submit")}
            </Button>
          )}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default NewPost;
