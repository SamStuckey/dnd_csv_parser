export const uploadSong = (title, tags, success, error) => {
  $.ajax({
    type: 'GET',
    data: {song: {title: title, tags: tags}},
    success,
    error
  });
};
