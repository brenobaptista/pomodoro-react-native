import formatNumber from '../src/utils/formatNumber';

test('5 becomes 05', () => {
  expect(formatNumber(5)).toBe('05');
});
