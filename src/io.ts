// io

function loadFile(name, cb){
    let request = new XMLHttpRequest();
    request.open('GET', name, true);
    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            console.log("File Loaded");
            cb(this.response);
        }
    };
    request.send();
}

function printData(title){
    let mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');
    mywindow.document.write('<html><head><title>'+title+'</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write(document.getElementById("data").innerHTML);
    mywindow.document.write('</body></html>');
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/
    mywindow.print();
    return true;
}