# flyd-skip
Skip function for [Flyd](https://github.com/paldepind/flyd).

# Usage
```javascript
var source = flyd.stream();
var s = skip(3, source);
flyd.on((v) => console.log(v), s);
source(1)(2)(3)(4)(5)(6);  // logs 4 5 6
```
