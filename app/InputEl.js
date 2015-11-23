//window.JJ = window.JJ || {};
//
//JJ.InputEl = function(opts) {
//    var makeEl = JJ.utils.makeEl;
//    var wrapper = makeEl('span');
//
//    wrapper.className = 'input-el';
//    wrapper.className += opts.className ? ' ' + opts.className : '';
//
//    this._inputEl = makeEl('input');
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
//    JJ.Element.call(this, opts);
//
//    this.el = wrapper;
//};
//
//JJ.InputEl.prototype = Object.create(JJ.Element.prototype);
