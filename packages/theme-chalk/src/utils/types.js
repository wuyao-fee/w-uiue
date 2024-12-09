export let isFunction = (functionToCheck) => {
  let getType = {};
  return (
    functionToCheck &&
    getType.toString.call(functionToCheck) === "[object Function]"
  );
};
