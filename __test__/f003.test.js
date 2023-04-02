const maskKeysInObjectStringify = require("../f003").maskKeysInObjectStringify;
const unmaskedObject = {
  key1: "value1",
  key2: "value2",
  credentialKey3: "credential_value3",
  credentialKey4: "passwd",
};

test('show all the keys in object when loggingLevel is "TRACE"', () => {
  const logString = maskKeysInObjectStringify(
    unmaskedObject,
    ["credentialKey3", "credentialKey4"],
    "TRACE",
    6
  );
  expect(logString).toBe(
    '{"key1":"value1","key2":"value2","credentialKey3":"credential_value3","credentialKey4":"passwd"}'
  );
});

test('mask all credential keys in object when loggingLevel is default to "INFO" and maskLength is default to 6', () => {
  const logString = maskKeysInObjectStringify(unmaskedObject, [
    "credentialKey3",
    "credentialKey4",
  ]);
  expect(logString).toBe(
    '{"key1":"value1","key2":"value2","credentialKey3":"creden*** ***value3","credentialKey4":"passwd*** ***passwd"}'
  );
});

test('mask all credential keys in object when loggingLevel is "WARN" and maskLenght is 3', () => {
  const logString = maskKeysInObjectStringify(
    unmaskedObject,
    ["credentialKey3", "credentialKey4"],
    "WARN",
    3
  );
  expect(logString).toBe(
    '{"key1":"value1","key2":"value2","credentialKey3":"cre*** ***ue3","credentialKey4":"pas*** ***swd"}'
  );
});
