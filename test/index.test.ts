import { errorFormatter } from '../src/errorFormatter';
import { errors } from './errors';

describe('errorFormatter', () => {
  test('should format types', () => {
    errors.forEach(e => expect(errorFormatter(e)).toMatchSnapshot());
  });
});

