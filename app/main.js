window.JJ = window.JJ || {};

var signInFormEl = document.getElementById('sign-in-form-fields');
var invalidFields = document.getElementById('invalid-fields');
var inputButtonEl = document.getElementById('submit-button');
var dataStore = new JJ.DataStore();
var formObjects = [];
var i;

formObjects.push(
    new JJ.SelectEl({
        dataStore: dataStore,
        propName: 'title',
        className: 'select-el__title',
        label: 'Title',
        options: ['Mr', 'Mrs', 'Ms'],
        validator: JJ.validators.isNotBlank,
    })
);

formObjects.push(
    new JJ.InputEl({
        dataStore: dataStore,
        propName: 'firstName',
        className: 'input-el__first-name',
        label: 'First name',
        validator: JJ.validators.isNotBlank,
    })
);

formObjects.push(
    new JJ.InputEl({
        dataStore: dataStore,
        propName: 'lastName',
        className: 'input-el__last-name',
        label: 'Last name',
        validator: JJ.validators.isNotBlank,
    })
);

formObjects.push(
    new JJ.InputEl({
        dataStore: dataStore,
        propName: 'email',
        className: 'input-el__email',
        label: 'Email',
        validator: JJ.validators.isEmail,
    })
);

formObjects.push(
    new JJ.InputEl({
        dataStore: dataStore,
        propName: 'addLine1',
        className: 'input-el__add-1',
        label: 'Address',
        validator: JJ.validators.isNotBlank,
    })
);

formObjects.push(
    new JJ.InputEl({
        dataStore: dataStore,
        propName: 'firstName',
        className: 'input-el__first-name',
        label: 'First name',
        validator: JJ.validators.isNotBlank,
    })
);

for (i = 0; i < formObjects.length; i++) {
    signInFormEl.appendChild(formObjects[i].el);
}

inputButtonEl.addEventListener('click', function(e) {
    e.preventDefault();
    var i;

    for (i = 0; i < formObjects.length; i++) {
        var formObject = formObjects[i];
        var isValid = formObject.isValid();
        if (!isValid) {
            invalidFields.appendChild(formObject.el);
            console.log(formObject.label + ' is not valid');
        }
    }
});
