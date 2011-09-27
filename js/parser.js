var FILE_NAME = 'files/objects.txt';

$(document).ready(function(){
	openFile();
});

function openFile() {
    $.get(FILE_NAME, function(data) {
       parse(data); 
    });
}

function parse(data) {
     var lines = data.split("\n");
     lines.pop();
     $('#playerArea')[0].innerHTML = generateHtml(lines);

}

function generateHtml(lines) {
    var html = '';
    for (var i = 0; i < lines.length; i++) {
        html += parseLine(lines[i]);
    }
    
    return html;
}

function parseLine(line) {
    var data = line.split(',');
    var name = data[0];
    var path = data[1].replace(" ", "");

    var idPrefix = name.replace(/\s/g,"");
    var player = idPrefix + 'Player';
    var play = player + '.play();';
    var stop = player + '.pause();' + player + '.currentTime = 0;';
    var playImg = '<img src="img/play.png"></img>';
    var stopImg = '<img src="img/stop.png"></img>';

    var html = '<div id="' + idPrefix  + 'Container" class="container">\n';
    html += '<h3>' + name  + '</h3>\n';
    html += '<audio id="' + player + '" src="' + path + '"></audio>\n';
    html += '<script type="text/javascript"> var ' + player + '= document.getElementById("' + player + '");</script>';
    html += '<ul>\n';
    html += '<li><button type="button" class="play" onclick="'+ play + '">' + playImg  + '</button></li>\n';
    html += '<li><button type="button" class="stop" onclick="' + stop  + '">' + stopImg  + '</button></li>\n';
    html += '</ul>\n'
    html += '</div>\n';
    
    return html;
}

