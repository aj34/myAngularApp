'use strict';

myApp.factory('photoSearchService', function($resource){
    return $resource('http://api.flickr.com/services/feeds/:action',
        {
            action: "photos_public.gne",
            callback: 'JSON_CALLBACK'
        },
        {get: {method: 'JSONP'}
        });
});


