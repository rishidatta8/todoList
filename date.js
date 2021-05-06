
const _getDate = ()=>{
  const date = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return date.toLocaleString("en-us", options);
};

export { _getDate as Date };

const _getDay = ()=>{
  const date = new Date();
  const options = {
    weekday: "long",
  };

  return date.toLocaleString("en-us", options);
};

export { _getDay as Day };
