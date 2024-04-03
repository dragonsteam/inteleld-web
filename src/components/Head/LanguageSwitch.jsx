import { Select } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const LanguageSwitch = () => {
  const [t, i18n] = useTranslation("global");
  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <Select
      width={20}
      size="sm"
      defaultValue="en"
      onChange={(e) => {
        handleChangeLang(e.target.value);
      }}
    >
      <option value="en">En</option>
      <option value="uz">O'z</option>
      <option value="uz_cr">Уз</option>
      <option value="ru">Ру</option>
    </Select>
  );
};

export default LanguageSwitch;
