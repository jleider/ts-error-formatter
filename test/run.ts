/* eslint-disable no-console */
import { errorFormatter } from '../src/errorFormatter';
import { errors } from './errors';


errors.forEach(e => console.log(`\n${errorFormatter(e)}\n`));