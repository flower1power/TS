enum ImageFormat {
  Png = 'png',
  Jpeg = 'jpeg',
}

interface IResolution {
  width: number;
  heigh: number;
}

interface IImageConversion extends IResolution {
  format: ImageFormat;
}

class ImageBuilder {
  private format: ImageFormat[] = [];
  private resolution: IResolution[] = [];

  addPng() {
    if (this.format.includes(ImageFormat.Png)) {
      return this;
    }
    this.format.push(ImageFormat.Png);
    return this;
  }

  addJpeg() {
    if (this.format.includes(ImageFormat.Jpeg)) {
      return this;
    }
    this.format.push(ImageFormat.Jpeg);
    return this;
  }

  addResolution(width: number, heigh: number) {
    this.resolution.push({ width, heigh });
    return this;
  }

  build(): IImageConversion[] {
    const res: IImageConversion[] = [];

    for (const r of this.resolution) {
      for (const form of this.format) {
        res.push({ format: form, width: r.width, heigh: r.heigh });
      }
    }

    return res;
  }
}

console.log(
  new ImageBuilder()
    .addJpeg()
    .addPng()
    .addResolution(100, 50)
    .addResolution(200, 100)
    .build(),
);
