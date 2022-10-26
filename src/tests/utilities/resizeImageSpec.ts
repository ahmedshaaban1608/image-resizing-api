import resize from '../../utilities/resizeImage';

describe('Test image resizing', () => {
  it('1- Expect an error while resizing the image', async (): Promise<void> => {
    expect(await resize('river', '50', '50a')).toBe('Error is found');
  });

  it('2- Expect to resize the image without error', async (): Promise<void> => {
    expect(await resize('river', '50', '50')).toBe('successfully resized');
  });
});
