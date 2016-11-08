export const fetchChunk = (page, success, errorCB) => {
  $.ajax({
    method: 'GET',
    url: 'songs',
    data: {song: {page: page}},
    success,
    error: errors => {
      errorCB(errors);
    }
  });
};
