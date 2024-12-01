function subtractFileNameAndExtension(filePath) {
  const lastBackslashIndex = filePath.lastIndexOf("\\");
  const fileNameWithExtension = filePath.substring(lastBackslashIndex + 1);

  const dotIndex = fileNameWithExtension.lastIndexOf(".");
  const fileName = fileNameWithExtension.substring(0, dotIndex);
  const extension = fileNameWithExtension.substring(dotIndex + 1);

  return `File name: ${fileName}\nFile extension: ${extension}`;
}

subtractFileNameAndExtension("C:\\Internal\\training-internal\\Template.pptx");
