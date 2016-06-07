var name;
var number;
var datum = [];

function handleFiles() {

    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: "http://www.thedeadpixelsociety.co/AdultVolunteers.csv",
            dataType: "csv",
            success: function (data) { processData(data); }
        });
    });
}

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i = 1; i < allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j = 0; j < headers.length; j++) {
                tarr.push(headers[j] + ":" + data[j]);
            }
            lines.push(tarr);
        }
    }
    console.log(lines);
    signout(lines);
}






function signout(lines){
  name = document.getElementById("name").value;
  number = document.getElementById("number").value;
  console.log(lines);
  }

function getName(){
    return name;
}
