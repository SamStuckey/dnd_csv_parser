export const createCSV = (songs) => {
  const lineArray = ['data:text/csv;charset=utf-8,"song","tags"'];
  songs.forEach(function (song, index) {
    const title = song.title;
    const tags = song.tags.map((t) => t.description).join(',');
    const line = `"${title}","${tags}"`;
    lineArray.push(line);
  });
  return lineArray.join("\n");
};

export const downloadCSV = (csv) => {
  const encodedUri = encodeURI(csv);
  window.open(encodedUri);
};
