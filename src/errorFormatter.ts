import * as chalk from 'chalk';

const expected = chalk.green;
const received = chalk.redBright;

const typeComparison1 = (ss: string, p1: string) =>
  ss.replace(`'${p1}'`, `'${received(p1)}'`);

const typeComparison2 = (ss: string, p1: string, p2: string) =>
  ss
    .replace(`'${p1}'`, `'${received(p1)}'`)
    .replace(`'${p2}'`, `'${expected(p2)}'`);

const typeComparison3 = (ss: string, p1: string, p2: string, p3: string) =>
  ss
    .replace(`'${p1}'`, `'${received(p1)}'`)
    .replace(`'${p2}'`, `'${received(p2)}'`)
    .replace(`'${p3}'`, `'${expected(p3)}'`);

const highlights: Array<[message: string | RegExp, highlightFn: (substring: string, ...args: string[]) => string]> = [
  [/.+ '(.+)' .+ '(.+)' .+ '(.+)'.*/, typeComparison3],
  [/.+ '(.+)' .+ '(.+)'.*/, typeComparison2],
  [/.+ '(.+)' .+\./, typeComparison1],
];

export const errorFormatter = (msg: string): string => highlights.reduce(
  (m: string, h) => m.replace(new RegExp(h[0], 'g'), h[1]),
  msg
);