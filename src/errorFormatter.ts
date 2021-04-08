import * as chalk from 'chalk';

const expected = chalk.green;
const received = chalk.redBright;

const typeComparison1 = (ss: string, p1: string) =>
  ss.replace(`'${p1}'`, `'${received(p1)}'`);

const typeComparison2 = (ss: string, p1: string, p2: string) =>
  ss
    .replace(`'${p1}'`, `'${received(p1)}'`)
    .replace(`'${p2}'`, `'${expected(p2)}'`);

const highlights: Array<[message: string | RegExp, highlightFn: (substring: string, ...args: string[]) => string]> = [
  [/.+ '(.+)' .+ '(.+)'.*/, typeComparison2],
  [/.+ '(.+)' .+\./, typeComparison1],
];

export const errorFormatter = (msg: string): string => highlights.reduce(
  (m: string, h) => m.replace(new RegExp(h[0], 'g'), h[1]),
  msg
);