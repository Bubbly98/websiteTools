const sharp =
  require("sharp");

const path =
  require("path");

const fs =
  require("fs");

async function compressImage(
  file
) {

  const outputDir =
    path.join(
      __dirname,
      "../uploads/compressed"
    );

  if (
    !fs.existsSync(
      outputDir
    )
  ) {

    fs.mkdirSync(
      outputDir,
      {
        recursive: true
      }
    );

  }

  const fileName =
    `compressed-${Date.now()}.jpg`;

  const outputPath =
    path.join(
      outputDir,
      fileName
    );

  await sharp(
    file.buffer
  )
    .jpeg({
      quality: 70
    })
    .toFile(
      outputPath
    );

  const originalSize =
    file.size;

  const compressedSize =
    fs.statSync(
      outputPath
    ).size;

  const reduction =
    (
      (
        originalSize -
        compressedSize
      ) /
      originalSize
    ) * 100;

  return {

    fileName,

    originalSize,

    compressedSize,

    reduction:
      reduction.toFixed(2)

  };
}

module.exports =
  compressImage;