angular.module('fcb1010EditorApp').service('midiService', function ($q) {
    var service = {};
    service.requestMIDIAccess = function () {
        var deferred = $q.defer();
        if (navigator.requestMIDIAccess) {
            navigator.requestMIDIAccess({sysex:true})
                .then(function (access) {
                    deferred.resolve(access);
                })
                .catch(function (err) {
                    deferred.reject(err);
                });
        } else {
            deferred.reject('Web MIDI API is not supported');
        }
        return deferred.promise;
    };
    
    return service;
});