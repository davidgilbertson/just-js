window.JJ = window.JJ || {};

JJ.validators = {
    isNotBlank: function(value) {
        return !!value;
    },

    isEmail: function(value) {
        return !!value.match(/.@./);
    },

    isNumber: function(value) {
        if (!value) return false;

        return !Number.isNaN(Number(value));
    }
};
