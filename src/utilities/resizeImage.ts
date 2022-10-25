import sharp from 'sharp';
// resize function
const resize = async (
  fileName: string,
  width: string,
  height: string
): Promise<void> => {
  await sharp(`./build/public/images/${fileName}.jpg`)
    .resize(Number(width), Number(height))
    .toFile(`./build/public/images/thumb/${fileName}_${width}_${height}.jpg`);
};
export default resize;
