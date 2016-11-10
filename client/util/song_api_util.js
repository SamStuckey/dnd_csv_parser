export const uploadSong = (title, tags, success, error) => {
  $.ajax({
    type: 'POST',
    url: 'songs',
    data: {song: {title: title, tags: tags}},
    success,
    error
  });
};

export const editSong = (id, title, tags, success, error) => {
  $.ajax({
    type: 'PUT',
    url: `songs/${id}`,
    data: {song: {title: title, tags: tags}},
    success,
    error
  });
};

export const fetchSong = (id, success, error) => {
  $.ajax({
    type: 'GET',
    url: `songs/${id}`,
    success,
    error
  });
};

export const fillFinder = (str, success, error) => {
  $.ajax({
    type: 'GET',
    url: 'songs',
    data: {song: {string: str}},
    success,
    error
  });
};
