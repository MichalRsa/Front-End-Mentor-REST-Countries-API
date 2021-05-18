const nameToURL = (name) => {
  const lowerCaseName = name.toLowerCase();
  return lowerCaseName.replaceAll(" ", "-");
};

export default nameToURL;
