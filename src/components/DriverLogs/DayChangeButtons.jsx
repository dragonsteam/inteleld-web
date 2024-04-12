import { Button, ButtonGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { getDateInStr } from "../../util";

const DayChangeButtons = ({ driver_id, currDateStr }) => {
  const navigate = useNavigate();

  const handleChangeDate = (i) => {
    // Given date string in the format "yyyy-mm-dd"
    // Split the string into year, month, and day parts
    const [year, month, day] = currDateStr.split("-").map(Number);
    // Create a Date object using the extracted parts
    var dateObject = new Date(year, month - 1, day);
    // now ready to navigate
    dateObject.setDate(dateObject.getDate() + i);
    navigate(`/driver-logs/${driver_id}/${getDateInStr(dateObject)}`);
  };

  return (
    <ButtonGroup colorScheme="blue" variant="outline">
      <Button
        onClick={() => {
          handleChangeDate(-1);
        }}
      >
        {"<<"}
      </Button>
      <Button
        onClick={() => {
          handleChangeDate(1);
        }}
      >
        {">>"}
      </Button>
    </ButtonGroup>
  );
};

export default DayChangeButtons;
