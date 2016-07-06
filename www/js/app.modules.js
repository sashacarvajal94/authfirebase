JavaScript

(function(){
  'use strict';

  angular
    .module('your_app_name', [

            /*
            This is the place for the core and shared modules
            */
            'your_app_name.core',

            /*
            This is the place for the features modules, like auth.
            */
            'your_app_name.auth',
]);

})();
