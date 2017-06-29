# keyword-expansion

Provides a syntax for SEO keywords based on [brace expansion](https://github.com/juliangruber/brace-expansion#example).
Can be used either as a CLI or as a Node.js module.

## CLI Usage

```bash
npm install -g keyword-expansion
echo '{android,ios} {,app} development {,company}' | keyword-expansion
# Perform
# cat keywords.txt | keyword-expansion
```

Outputs:

```
android development
android development company
android app development
android app development company
ios development
ios development company
ios app development
ios app development company
```

The input can include multiple lines (obvs).

## Module Usage

```js
const expand = require('keyword-expansion')
let keywords = expand('{android,ios} {,app} development {,company}')
console.log(keywords.length) // -> 8
```

### `expand(input, options = {})`

Returns an array of keywords for the `input` string. Each line in `input` is interpreted
as a separate set of keywords to be expanded.

- `options.minNumWords` defines a minimum number of words required for each returned keyword. Defaults to `2`
