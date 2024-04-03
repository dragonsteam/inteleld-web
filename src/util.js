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

export const getDateString = (strDate) => {
  let datetime = new Date(strDate);
  return datetime
    .toLocaleString("en-US", { timeZone: "US/Eastern" })
    .split(",")[0];
};

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
