import helloworld from './index';

describe('helloworld', () => {
  it('works correctly', () => {
    const result = helloworld();
    expect(result).toBe('helloworld');
  })
})
