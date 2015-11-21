window.JJ = window.JJ || {};

JJ.utils = {
    makeEl: function(tagName, text) {
        var el = document.createElement(tagName || 'div');

        if (text) {
            el.appendChild(document.createTextNode(text));
        }

        return el;
    }
};
