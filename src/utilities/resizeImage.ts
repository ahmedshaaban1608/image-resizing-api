import { join } from 'path';
import sharp from 'sharp';
// resize function
const resize = async (
  fileName: string,
  width: string,
  height: string
): Promise<string> => {
  let msg: string = "";
  try{
  await sharp(join(__dirname, '..', 'public', 'images', `${fileName}.jpg`))
    .resize(Number(width), Number(height))
    .toFile(
      join(
        __dirname,
        '..',
        'public',
        'images',
        'thumb',
        `${fileName}_${width}_${height}.jpg`
      )
    );
return msg = 'successfully resized'
  } catch(err){
    return msg = 'Error is found'
  }
}
export default resize;
