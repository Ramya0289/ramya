'use strict';

var eventsApp = angular.module('eventsApp', []);


/*** directives notes
ng-change always need ng-model example of ng-change is checkbox changes
we can use ng-bind instead of writing angular experssions,ng-bind template can help us write multiple expressions
we have to add sanitize library and inject dependancy into module to use ng-bindhtml(never manipulate DOM from controller use directives for DOM manipulation)
ng-bindhtml is  used to add html to DOM or override existing html
ng-cloack will hide angular expressions if client computer is slow add it to the body class and the go to css file add it
look in documentation on how to add to css
ng-style directive ad to html and then in controller define it{colr:'red'},ng-classeven ng-classodd apply to even or odd elements
ng-class add or remove
add or remove attributes directives are
ng-Disabled,ng-Checked,ng-Multiple,ng-Readonly,ng-Selected
ng-form lets you create nested forms ,ng-submit is used to submit form
ngnonbindable tells angular  donot parse and do binding

older IE polyfill jason.stringify and dont use <ng-tags>
filters are uppercase,lowercase,filter,numbers:2,date:"medium",jason   we then have orderby,limitto,filter can be used wth ngrepeat
ngmodel works for input ,select and textarea
***/


