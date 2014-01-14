//
// This is a shim which provides the Function.prototype.name property for browsers that do not have it (IE).
// This is used in Drupal's core states.js implementation and causes dependent form elements to completely fail
// in some cases.
//
// This code adds an implementation which works in IE 9 and up.
//
// http://matt.scharley.me/2012/03/09/monkey-patch-name-ie.html
//
if (Function.prototype.name === undefined && Object.defineProperty !== undefined) {
    Object.defineProperty(Function.prototype, 'name', {
        get: function() {
            var funcNameRegex = /function\s([^(]{1,})\(/;
            var results = (funcNameRegex).exec((this).toString());
            return (results && results.length > 1) ? results[1].trim() : "";
        },
        set: function(value) {}
    });
}
