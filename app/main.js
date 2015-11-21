window.JJ = window.JJ || {};

var app = document.getElementById('app');

// blah blah define DataStore and pass it, and the propPath, into each input el

var dataStore = new JJ.DataStore();

var firstNameEl1 = new JJ.InputEl({
    dataStore: dataStore,
    propName: 'firstName',
    className: 'text class',
    label: 'First name',
});

var lastNameEl1 = new JJ.InputEl({
    dataStore: dataStore,
    propName: 'lastName',
    className: 'test-class-2',
    label: 'Last name',
});


var firstNameEl2 = new JJ.InputEl({
    dataStore: dataStore,
    propName: 'firstName',
    className: 'test-class-2',
    label: 'Last name',
});

app.appendChild(firstNameEl1.el);
app.appendChild(lastNameEl1.el);
app.appendChild(firstNameEl2.el);
