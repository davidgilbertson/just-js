window.JJ = window.JJ || {};

JJ.InputEl = function(opts) {
    var makeEl = JJ.utils.makeEl;
    var wrapper = makeEl('span');

    wrapper.className = 'input';
    wrapper.className += opts.className ? ' ' + opts.className : '';

    var inputEl = makeEl('input');
    inputEl.value = opts.dataStore.getValue(opts.propName);

    // subscribe to change in store for this elements property (for two-way binding)
    opts.dataStore.onUpdate(opts.propName, function(newValue) {
        if (newValue !== inputEl.value) {
            inputEl.value = newValue;
        }
    });

    if (opts.label) {
        var label = makeEl('label', opts.label);

        label.appendChild(inputEl);
        wrapper.appendChild(label);
    } else {
        wrapper.appendChild(inputEl);
    }

    // send change to store
    inputEl.addEventListener('input', function(e) {
        opts.dataStore.update({
            propName: opts.propName,
            value: e.target.value,
        });
    });

    this.el = wrapper;
};
