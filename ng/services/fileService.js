angular.module('fcb1010EditorApp').service("fileService", function () {
    var service = {};
    service.toFile = function(data,filename,t){
        var blob = new Blob([data], { type: t });
        var fileName = filename;
        if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveBlob(blob, fileName);
        } else {
            var downloadLink = document.createElement('a');
            downloadLink.href = window.URL.createObjectURL(blob);
            downloadLink.setAttribute('download', fileName);
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        }
    };

    service.toJSONFile = function(data,filename){
        var t = 'application/json';
        filename += '.json';
        var d = JSON.stringify(data,null,2);
        service.toFile(d,filename,t);
    }

    service.toSysexFile = function(data,filename){
        var t = 'application/octet-stream';
        filename += '.syx';
        service.toFile(data,filename,t);
    };

    return service;
});