const sharp = require("sharp");

async function compressImage(file) {

  const compressedBuffer =
    await sharp(file.buffer)
      .jpeg({
        quality: 70
      })
      .toBuffer();

  const originalSize =
    file.size;

  const compressedSize =
    compressedBuffer.length;

  const reduction =
    (
      (
        originalSize -
        compressedSize
      ) /
      originalSize
    ) * 100;

  return {

    originalSize,

    compressedSize,

    reduction:
      reduction.toFixed(2),

    imageData:
      compressedBuffer.toString("base64")

  };

}

module.exports =
  compressImage;