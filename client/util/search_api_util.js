export const fetchChunk = (page, success, errorCB) => {
  $.ajax({
    method: 'GET',
    url: 'songs',
    data: page,
    success,
    error: errors => {
      errorCB(errors);
    }
  });
};
