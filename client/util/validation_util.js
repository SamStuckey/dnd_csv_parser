export const isValid = (str) => {
  return (
    str.length > 2 &&
    str.match(/[a-zA-Z\d\s-]*/)[0] === str
  );
};
  
