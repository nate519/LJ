$(document).ready(function(){
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    //TODO
    /* 녹색 원 하나가 캔버스 가운데에 나타나는 코드
    var c = Shape.Circle(200, 200, 50);
    c.fillColor = 'green';
    */

    /* 바둑판 모양으로 원을 그리는 코드
    var c;
    for(var x=25; x < 400; x+= 50) {
        for(var y= 25; y <400; y+= 50)
            c = Shape.Circle(x, y , 20);
            c.fillColor = 'green';
        }
    } */

    var c= Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fonSize = 20;
    text.content = 'Hello World';

    var tool = new Tool();
    tool.onMouseDown = function(event) {
        //var c = Shape.Circle(event.point.x, event.point.y, 20);      -> 아래 코드와 동일한 기능.
        var c = Shape.Circle(event.point, 20);
        c.fillColor = 'green';
    };

    paper.view.draw();

    console.log('main.js loaded');
});