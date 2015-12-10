# just-js
Experiments in vanilla JS bits and pieces

## Faux-React
At the moment this is an experiment to replicate the logic of react components.
Assumptions
* The only component is a user input (`<select>` or `<input>`)
* Each component is (two-way) bound to a value in the store
* Each component knows if it is valid or not
* This is only really suited to a flat list of components (such as in the form).
Building any structure would be a pain.