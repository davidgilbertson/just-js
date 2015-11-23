//window.JJ = window.JJ || {};
//
//JJ.SelectEl = function(opts) {
//    var makeEl = JJ.utils.makeEl;
//    var wrapper = makeEl('span');
//    var i;
//
//    wrapper.className = 'select-el';
//    wrapper.className += opts.className ? ' ' + opts.className : '';
//
//    this._inputEl = makeEl('select');
//    this._inputEl.value = opts.dataStore.getValue(opts.propName);
//
//    if (opts.label) {
//        var label = makeEl('label', opts.label);
//
//        label.appendChild(this._inputEl);
//        wrapper.appendChild(label);
//    } else {
//        wrapper.appendChild(this._inputEl);
//    }
//
//    for (i = 0; i < opts.options.length; i++) {
//        var option = opts.options[i];
//        var optionEl = document.createElement('option');
//        optionEl.value = option;
//        optionEl.appendChild(document.createTextNode(option));
//
//        this._inputEl.appendChild(optionEl);
//    }
//
//    JJ.Element.call(this, opts);
//
//    this.el = wrapper;
//};
//
//JJ.SelectEl.prototype = Object.create(JJ.Element.prototype);
//
