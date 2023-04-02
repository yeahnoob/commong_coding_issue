// Function to return a stringt with the credentials key masking in a object.
// That object is one of the function parameters. Logging level is one of the function parameters too.
// That object cannot be changed.
// Using the replacer function in JSON.stringify() method.
function maskKeysInObjectStringify(unmaskedObject, maskKeyNames, loggingLevel = 'INFO', maskedLength = 6) {
    return JSON.stringify(unmaskedObject, function (key, value) {
        if (loggingLevel !== 'TRACE') {
            if (maskKeyNames.indexOf(key) > -1) {
                return value.substring(0, maskedLength) + '*** ***' + value.substring(value.length - maskedLength, value.length);
            }
        }
        return value;
    });
}

module.exports = { maskKeysInObjectStringify };