import express from 'express';
import fs from 'fs';
import { check } from 'express-validator';
import resize from './utilities/resizeImage';
import checkValidator from './utilities/checkValidator';
const app = express();
const path = 'http://localhost';
const port = 3600;

app.get(
  '/api/images',
  [
    check('filename').not().isEmpty().withMessage('file name cannot be empty'),
    check('width').isNumeric().withMessage('Only numbers is Allowed for width'),
    check('height')
      .isNumeric()
      .withMessage('Only numbers is Allowed for height'),
  ],
  checkValidator,
  (req: express.Request, res: express.Response) => {
    const fileName = req.query.filename,
      width = req.query.width,
      height = req.query.height;

    const checkImage = () => {
      if (
        fs.existsSync(
          `build/public/images/thumb/${fileName}_${width}_${height}.jpg`
        )
      ) {
        res
          .status(200)
          .send(
            `<h3>'${fileName}.jpg' is resized before (width: ${width}px & height: ${height}px)</h3><img src="${path}:${port}/images/thumb/${fileName}_${width}_${height}.jpg" alt="${fileName}">`
          );
        return;
      } else if (fs.existsSync(`build/public/images/${fileName}.jpg`)) {
        if (!fs.existsSync(`build/public/images/thumb`)) {
          fs.mkdirSync(`build/public/images/thumb`);
        }
        resize(fileName as string, width as string, height as string).then(
          (): void => {
            res
              .status(200)
              .send(
                `<h3>'${fileName}.jpg' is successfully resized  (width: ${width}px & height: ${height}px)</h3><img src="${path}:${port}/images/thumb/${fileName}_${width}_${height}.jpg" alt="${fileName}">`
              );
          }
        );
      } else {
        return res.status(422).json({
          errors: `Image with name '${fileName}.jpg' is not found, try again`,
        });
      }
    };

    checkImage();
  }
);

app.use(express.static('./build/public'));
app.listen(port, () => {
  console.log(`Server is running on ${path}:${port}`);
});

export default app;
