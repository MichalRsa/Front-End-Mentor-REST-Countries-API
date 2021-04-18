// import React from "react";
export const arrayToJsxEl = (data, plural, singular) => {
  if (typeof data === "object") {
    if (data.length !== 1) {
      return (
        <p>
          <span>{plural}: </span>
          {data.map((el) => (
            <>
              {el.name}
              {putComma(data, el)}{" "}
            </>
          ))}
        </p>
      );
    } else {
      return (
        <p>
          <span>{singular}: </span>
          {data[0].name}
        </p>
      );
    }
  }
};

const putComma = (data, el) => {
  if (data[data.length - 1] !== el) {
    return ",";
  }
};
