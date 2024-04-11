export const JWTDecoder = (token) => {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  return JSON.parse(jsonPayload);
};

export const mps2mph = (mps) => {
  return parseFloat((mps * 2.237).toFixed(2));
};

export const getDate = () => {
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based month index
  var day = currentDate.getDate();

  // Format the date as a string (YYYY-MM-DD)
  var dateString =
    year +
    "-" +
    (month < 10 ? "0" : "") +
    month +
    "-" +
    (day < 10 ? "0" : "") +
    day;
  return dateString;
};

// export const getDateString = (strDate) => {
//   let datetime = new Date(strDate);
//   return datetime
//     .toLocaleString("en-US", { timeZone: "US/Eastern" })
//     .split(",")[0];
// };

export const getErrorMsg = (data, index) => {
  let indexes = index.split(".");

  for (let i = 0; i < indexes.length; i++) {
    Object.keys(data).forEach((s) => {
      if (s === indexes[i]) data = data[s];
    });
  }
  // prepare message
  let msg = "";
  for (let i = 0; i < data.length; i++) msg += data[i] + " ";
  return msg;
};

export const limitText = (text, limit) => {
  if (text.length > limit) return text.slice(0, limit) + "...";
  return text;
};

export const getLocalAuthData = (appendAuth) => {
  const auth = localStorage.getItem("auth");
  if (!appendAuth || !auth) return {};
  const auth_data = JSON.parse(auth);
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + auth_data.accessToken,
    },
  };
};

export const formatTime = (time_str) => {
  return time_str + ":00";
};
