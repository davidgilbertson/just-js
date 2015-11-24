window.JJ = window.JJ || {};

JJ.utils = {
    makeEl: function(tagName, text) {
        var el = document.createElement(tagName || 'div');

        if (text) {
            el.appendChild(document.createTextNode(text));
        }

        return el;
    },

    addClass: function(el, className) {
        if (!className) return;

        var classList = el.className ? el.className.split(' ') : [];

        if (classList.indexOf(className) > -1) return;

        classList.push(className);

        el.className = classList.join(' ');
    },

    removeClass: function(el, className) {
        if (!className) return;

        var classList = el.className.split(' ');
        var pos = classList.indexOf(className);

        if (pos === -1) return;

        classList.splice(pos, 1);

        el.className = classList.join(' ');
    },
};
