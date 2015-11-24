window.JJ = window.JJ || {};

JJ.UserInput = function(opts) {
    this.opts = opts;

    var self = this;
    var makeEl = JJ.utils.makeEl;
    var addClass = JJ.utils.addClass;
    var removeClass = JJ.utils.removeClass;
    var i;

    var wrapper = makeEl('span');

    addClass(wrapper, opts.inputType + '-el');
    addClass(wrapper, opts.className);

    var inputEl = makeEl(opts.inputType);

    // wrap the element in a label if one was supplied
    if (opts.label) {
        var label = makeEl('label', opts.label);

        label.appendChild(inputEl);
        wrapper.appendChild(label);
    } else {
        wrapper.appendChild(inputEl);
    }

    // Do some setup slightly differently for different input types
    //if (opts.inputType === 'input') {
    //    inputEl.value = opts.dataStore.getValue(opts.propName);
    //}

    if (opts.inputType === 'select') {
        for (i = 0; i < opts.options.length; i++) {
            var option = opts.options[i];
            var optionEl = document.createElement('option');
            optionEl.value = option;
            optionEl.appendChild(document.createTextNode(option));

            inputEl.appendChild(optionEl);
        }
    }

    function validate() {
        self.isValid = opts.validator(self.getValue());

        if (self.isValid) {
            removeClass(wrapper, 'is-invalid');
        } else {
            addClass(wrapper, 'is-invalid');
        }
    }

    this.getValue = function() {
        return inputEl.value;
    };

    this.setValue = function(value) {
        inputEl.value = value;

        validate();
    };

    // subscribe to change in store for this elements property (for two-way binding)
    opts.dataStore.onUpdate(opts.propName, function(newValue) {
        if (newValue !== inputEl.value) {
            self.setValue(newValue);
        }
    });

    // send change to store
    inputEl.addEventListener('input', function(e) {
        validate();

        opts.dataStore.update({
            propName: opts.propName,
            value: e.target.value,
        });
    });

    this.setValue(opts.dataStore.getValue(opts.propName));

    this.el = wrapper;
};
