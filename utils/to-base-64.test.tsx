import { toBase64 } from '@app/utils';

describe('toBase64 function', () => {
  it('should resolve with a base64 string when given a valid file', async () => {
    const file = new File(['Hello, World!'], 'test.txt', {
      type: 'text/plain',
    });

    const result = await toBase64(file);

    if (typeof result === 'string') {
      expect(result.startsWith('data:text/plain;base64,')).toBe(true);
    } else {
      expect(result instanceof ArrayBuffer).toBe(true);
    }
  });
});
