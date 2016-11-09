export const fetchChunk = (page, tags, success, errorCB) => {
  $.ajax({
    method: 'GET',
    url: 'songs',
    data: {song: {page: page, tags: tags}},
    success,
    error: errors => {
      errorCB(errors);
    }
  });
};

export const fetchPageLimit = (success) => {
  $.ajax({
    method: 'GET',
    url: 'songs',
    data: {song: {counter: true}}
  });
};
