import * as chalk from 'chalk';
import { BabelCodeFrameOptions, Formatter, createCodeFrameFormatter } from 'fork-ts-checker-webpack-plugin/lib/formatter';
import { Issue } from 'fork-ts-checker-webpack-plugin/lib/issue';
import { errorFormatter } from './errorFormatter';

export const forkTsCheckerFormatter = (options?: BabelCodeFrameOptions): Formatter => (issue: Issue) =>
  `${chalk.gray(`${issue.code}:`)} ${errorFormatter(issue.message)}${createCodeFrameFormatter(options)({...issue, code: '', message: ''})}`;