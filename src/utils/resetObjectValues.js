export const resetObjectValues = (object) => {
  const is = (value, type) => typeof value === type;
  for (const key in object) {
    if (is(key, "string")) object[key] = "";
    if (is(key, "number")) object[key] = 0;
  }
};
