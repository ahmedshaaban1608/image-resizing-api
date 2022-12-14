import express from 'express';
import fs from 'fs';
import { check } from 'express-validator';
import resize from './utilities/resizeImage';
import checkValidator from './utilities/checkValidator';
import { join } from 'path';
const app = express();
const path = 'http://localhost';
const port = 3600;

app.get(
  '/api/images',
  [
    check('filename').not().isEmpty().withMessage('file name cannot be empty'),
    check('width')
      .isInt({ min: 10 })
      .withMessage('Only numbers >= 10 is Allowed for width'),
    check('height')
      .isInt({ min: 10 })
      .withMessage('Only numbers >= 10 is Allowed for height'),
  ],
  checkValidator,
  (req: express.Request, res: express.Response): void => {
    const fileName = req.query.filename,
      width = req.query.width,
      height = req.query.height;

    const checkImage = (): void => {
      if (
        fs.existsSync(
          join(
            __dirname,
            'public',
            'images',
            'thumb',
            `${fileName}_${width}_${height}.jpg`
          )
        )
      ) {
        res
          .status(200)
          .sendFile(
            join(
              __dirname,
              'public',
              'images',
              'thumb',
              `${fileName}_${width}_${height}.jpg`
            )
          );
        return;
      } else if (
        fs.existsSync(join(__dirname, 'public', 'images', `${fileName}.jpg`))
      ) {
        if (!fs.existsSync(join(__dirname, 'public', 'images', 'thumb'))) {
          fs.mkdirSync(join(__dirname, 'public', 'images', 'thumb'));
        }
        resize(fileName as string, width as string, height as string).then(
          (): void => {
            res
              .status(200)
              .sendFile(
                join(
                  __dirname,
                  'public',
                  'images',
                  'thumb',
                  `${fileName}_${width}_${height}.jpg`
                )
              );
          }
        );
      } else {
        res
          .status(422)
          .send(
            `Error: Image with name '${fileName}.jpg' is not found, try again`
          );
      }
    };

    checkImage();
  }
);

app.use(express.static(join(__dirname, 'public')));
app.listen(port, (): void => {
  console.log(`Server is running on ${path}:${port}`);
});

export default app;
