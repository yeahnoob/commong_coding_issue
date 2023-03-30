var unmaskedData = {
  name: "Gong",
  id: "123456",
  credentialPassword: "304abcdefghijklmn4444444",
  city: "New York",
};

const objLoggingStringify = (unmaskedData, maskKeyName="", loggingLevel="INFO") => {
  if (loggingLevel !== "TRACE") {
    return JSON.stringify(unmaskedData);
  } else {
    const maskReplacer = (key, value) => {
      let maskedValue = value;
      if (key === maskKeyName) {
        if (value && value.length > 7) {
          maskedValue =
            maskedValue.substring(0, 6) +
            "******" +
            maskedValue.substring(value.length - 6, value.length);
        } else {
          maskedValue = "****";
        }
      }
      return maskedValue;
    };
    return JSON.stringify(unmaskedData, maskReplacer);
  }
};

// var maskedData = JSON.stringify(unmaskedData, maskInfo);

console.log(objLoggingStringify(unmaskedData));
// console.log(JSON.stringify(unmaskedData));
console.log(JSON.stringify(unmaskedData));

console.log();

console.log(objLoggingStringify(unmaskedData, "credentialPassword", "TRACE"));
// console.log(JSON.stringify(unmaskedData));
console.log(JSON.stringify(unmaskedData));
