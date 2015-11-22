window.JJ = window.JJ || {};

var signInForm = document.getElementById('sign-in-form');

// blah blah define DataStore and pass it, and the propPath, into each input el

var dataStore = new JJ.DataStore();

var titleSelect = new JJ.SelectEl({
    dataStore: dataStore,
    propName: 'title',
    className: 'select-el__title',
    label: 'Title',
    options: ['Mr', 'Mrs', 'Ms'],
});

var firstNameInput = new JJ.InputEl({
    dataStore: dataStore,
    propName: 'firstName',
    className: 'input-el__first-name',
    label: 'First name',
});

var lastNameInput = new JJ.InputEl({
    dataStore: dataStore,
    propName: 'lastName',
    className: 'input-el__last-name',
    label: 'Last name',
});

var addLine1El = new JJ.InputEl({
    dataStore: dataStore,
    propName: 'addLine1',
    className: 'input-el__add-1',
    label: 'Address',
});

var firstNameInput2 = new JJ.InputEl({
    dataStore: dataStore,
    propName: 'firstName',
    className: 'input-el__first-name',
    label: 'First name',
});

signInForm.appendChild(titleSelect.el);
signInForm.appendChild(firstNameInput.el);
signInForm.appendChild(lastNameInput.el);
signInForm.appendChild(addLine1El.el);
signInForm.appendChild(firstNameInput2.el);

