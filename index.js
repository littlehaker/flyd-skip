var flyd = require('flyd');

module.exports = flyd.curryN(2, function (count, s) {
    return flyd.combine((s, self) => {
        if (count <= 0) {
            self(s());
        } else {
            count--;
        }
    }, [s]);
});
