import resize from '../../utilities/resizeImage';

describe('Test image resizing', () => {
  it('1- Expect to throw an error while resizing the image', async (): Promise<void> => {
    expect(await resize('river', '50', '50a')).toBe('Error is found');
  });

  it('1- Expect to resize the image without throw an error', async (): Promise<void> => {
    expect(await resize('river', '50', '50')).toBe('successfully resized');
  });
});
