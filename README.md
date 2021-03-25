# ts-error-formatter
**Syntax highlighting for TypeScript error messages**


![NPM](https://img.shields.io/npm/l/ts-error-formatter)
![npm](https://img.shields.io/npm/v/ts-error-formatter)

```
npm install --save-dev ts-error-formatter
```

The `errorFormatter` can be used either stand alone or with `fork-ts-checker-webpack-plugin`.

There are two exports: `errorFormatter` and `forkTsCheckerFormatter`.

* `errorFormatter: (msg: string) => string;` where the returned value will have console colored text.
* `forkTsCheckerFormatter: (options?: BabelCodeFrameOptions | undefined) => Formatter;`.

To use the `forkTsCheckerFormatter` simply use it with the custom formatter option in your `fork-ts-checker-webpack-plugin`'s config file.

