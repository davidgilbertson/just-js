window.JJ = window.JJ || {};

JJ.Element = function(opts) {
    this.opts = opts;
    this.isValid = opts.validator();
    var makeEl = JJ.utils.makeEl;
    var self = this;
    var i;
    var wrapper = makeEl('span');

    wrapper.className = opts.inputType + '-el';
    wrapper.className += opts.className ? ' ' + opts.className : '';

    this._inputEl = makeEl(opts.inputType);

    // wrap the element in a label if one was supplied
    if (opts.label) {
        var label = makeEl('label', opts.label);

        label.appendChild(this._inputEl);
        wrapper.appendChild(label);
    } else {
        wrapper.appendChild(this._inputEl);
    }

    // Do some setup slightly differently for different input types
    if (opts.inputType === 'input') {
        this._inputEl.value = opts.dataStore.getValue(opts.propName);
    }

    if (opts.inputType === 'select') {
        for (i = 0; i < opts.options.length; i++) {
            var option = opts.options[i];
            var optionEl = document.createElement('option');
            optionEl.value = option;
            optionEl.appendChild(document.createTextNode(option));

            this._inputEl.appendChild(optionEl);
        }
    }

    function validate() {
        self.isValid = opts.validator(self.getValue());

        if (self.isValid) {
            console.log('  --  >  Element.js:47 > validate', self.opts.label, 'is valid');
        } else {
            console.log('  --  >  Element.js:47 > validate', self.opts.label, 'is NOT valid');
        }
    }

    this.getValue = function() {
        if (opts.inputType === 'input') {
            return self._inputEl.value;
        }

        if (opts.inputType === 'select') {
            return self._inputEl.options[self._inputEl.selectedIndex].value;
        }
    };

    // subscribe to change in store for this elements property (for two-way binding)
    opts.dataStore.onUpdate(opts.propName, function(newValue) {
        // TODO (davidg): select the options if drop-down
        if (newValue !== self._inputEl.value) {
            self._inputEl.value = newValue;
        }
    });

    // send change to store
    this._inputEl.addEventListener('input', function(e) {
        validate();

        opts.dataStore.update({
            propName: opts.propName,
            value: e.target.value,
        });
    });

    this.el = wrapper;
};
