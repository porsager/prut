[![version](https://img.shields.io/npm/v/prut.svg)]() [![license](https://img.shields.io/github/license/porsager/prut.svg)]()

> Your new best friend when developing, and probably ONLY for development
 
# 💨 `p()` 

```js
p('Awesome!!')          // Logs awesome

fetch('https://cats')
.then(x => x.json())
.then(p)                // Logs the json result
.then(store)

a.neat().p.chain.p.here // Logs result of `neat` and `chain`

const wat = p`wat`

wat('is going on')      // Logs `wat is going on`
```

This module adds a global `p` and global `prut`* variable which is a convenience method for logging.

It simply defers to console.log, but returns the first argument instead of `undefined`.

If it is called as a tagged template literal it will return a new `p`function that always prefixes logs with the value in the template literal.

It also adds `p` and `prut` to Object.prototype to enable even quicker logging. This way you can jump into a chain at any place to log the value and continue with your program as if nothing happened.

\* (for times when p is shadowed)

### Example require

##### Node at launch
```bash
node -r prut index.js   # -r option is short for --require
```

##### Browser
```js
<script src="https//unpkg.com/prut">
```

##### Node in file
```js
require('prut')         // Adds the global p
```

##### Node global
You can use `prut` in place of node which is just a shortcut for `node -r prut ...`
```bash
prut index.js
```
