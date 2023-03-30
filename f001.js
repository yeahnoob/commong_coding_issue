const changeFunctionParameter = (obj, key, value) => {
    try {
        obj[key] = value
        return JSON.stringify(obj);
    } catch (e) {
        console.error(e.message);
        throw e;
    }
};

const oo = { k1: 'v1', k2: 'v2' };
console.log(oo);
console.log(changeFunctionParameter(oo, 'k1', 'vx'));
console.log(oo);