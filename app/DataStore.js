window.JJ = window.JJ || {};

JJ.DataStore = function() {
    var listeners = [];
    var dataStore = {};

    this.update = function(newData) {
        var i;

        dataStore[newData.propName] = newData.value;

        for (i = 0; i < listeners.length; i++) {
            var listener = listeners[i];

            if (listener.propName === newData.propName) {
                listener.cb(newData.value);
            }
        }
    };

    this.getValue = function(propName) {
        return dataStore[propName] || '';
    };

    this.onUpdate = function(propName, cb) {
        listeners.push({
            propName: propName,
            cb: cb,
        });
    };
};
