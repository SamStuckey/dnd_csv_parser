export const fetchChunk = (page, tags, success, error) => {
  $.ajax({
    method: 'GET',
    url: 'songs',
    data: {song: {page: page, tags: tags}},
    success,
    error
  });
};

export const fetchPageLimit = (success) => {
  $.ajax({
    method: 'GET',
    url: 'songs',
    data: {song: {counter: true}}
  });
};
