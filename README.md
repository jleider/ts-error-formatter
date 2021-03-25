# ts-error-formatter
**Syntax highlighting for TypeScript error messages**


![NPM](https://img.shields.io/npm/l/ts-error-formatter)
![npm](https://img.shields.io/npm/v/ts-error-formatter)

![image](https://user-images.githubusercontent.com/38108/112499058-7e937500-8d5d-11eb-8cd3-ff1df3a45bbe.png)

## Installation and Usage

```
npm install --save-dev ts-error-formatter
```

The `errorFormatter` can be used either stand alone or with `fork-ts-checker-webpack-plugin`.

There are two exports:

* `errorFormatter: (msg: string) => string;` 
  * The returned value will have console colored text
* `forkTsCheckerFormatter: (options?: BabelCodeFrameOptions | undefined) => Formatter;`
  * This convenience method also adds additional Babel CodeFrame output which is the default `fork-ts-checker-webpack-plugin` formatter

To use the `forkTsCheckerFormatter` simply use it with the custom formatter option in your `fork-ts-checker-webpack-plugin`'s config file.
