export const uploadSong = (title, tags, success, error) => {
  $.ajax({
    type: 'POST',
    url: 'songs',
    data: {song: {title: title, tags: tags}},
    success,
    error
  });
};
