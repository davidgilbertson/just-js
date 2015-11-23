window.JJ = window.JJ || {};

// intended to be extended by specific input elements

JJ.Element = function(opts) {
    this.label = opts.label;
    this.propName = opts.propName;
    var self = this;

    // subscribe to change in store for this elements property (for two-way binding)
    opts.dataStore.onUpdate(opts.propName, function(newValue) {
        if (newValue !== self._inputEl.value) {
            self._inputEl.value = newValue;
        }
    });

    // send change to store
    this._inputEl.addEventListener('input', function(e) {
        opts.dataStore.update({
            propName: opts.propName,
            value: e.target.value,
        });
    });

    this.isValid = function() {
        return opts.validator(this._inputEl.value);
    };
};
