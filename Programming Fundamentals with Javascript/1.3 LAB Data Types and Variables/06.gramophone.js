function gramophone(band, album, song) {
  let rotationTime = 2.5;
  let duration = (album.length * band.length * song.length) / 2;
  let rotationCount = duration / rotationTime;
  console.log(`The plate was rotated ${Math.ceil(rotationCount)} times.`);
}

gramophone("Black Sabbath", "Paranoid", "War Pigs");
gramophone("Rammstein", "Sehnsucht", "Engel");
