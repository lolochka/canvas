//Canvas (англ. canvas — «холст», рус. канва́с) — элемент HTML5, предназначенный для создания растрового двухмерного изображения при помощи скриптования, обычно на языке JavaScript[1]. Начало отсчёта блока находится слева сверху. От него и строится каждый элемент блока[2]. Размер пространства координат не обязательно отражает размер фактической отображаемой площади[2]. По умолчанию его ширина равна тремстам пикселям, а высота ста пятидесяти[2].

//Используется, как правило, для отрисовки графиков для статей и игрового поля в некоторых браузерных играх.//

//Компанией Google была выпущена JavaScript библиотека explorercanvas , которая позволяла работать с Canvas в браузерах IE7 и IE8.

//Особенности
//Изменение высоты или ширины холста сотрет всё его содержимое и все настройки, проще говоря он создастся заново[12];
//Начало отсчёта (точка 0,0) находится в левом верхнем углу[13]. Но её можно сдвигать[14];
//3D контекста нет, есть отдельные разработки, но они не стандартизованы[15];
//Цвет текста можно указывать аналогично CSS, впрочем, как и размер шрифта.


//Нагружает процессор и оперативную память;
//Из-за ограничения сборщика мусора, нет возможности очистить память;
//Необходимо самому обрабатывать события с объектами[19];
//Плохая производительность при большом разрешении[19];
//Приходится вырисовывать отдельно каждый элемент[19].

var canvas = document.getElementById("myCanvas");//Find the Canvas Element in DOM
var ctx = canvas.getContext("2d");//Create a Drawing Object in 2d
//Draw on the Canvas
ctx.fillStyle = "#708090";//choose color
ctx.font = "18px Arial";//Set font to "30px Arial" (font-size font)
//ctx.textAlign = "center";//choose centre of the text as a point for placement in the canvas' coordinate system 
ctx.fillText("Types of apps built with HTML5", 10, 20);//("Text", x, y);
ctx.font = "14px Arial";
ctx.fillText("Productivity", 10, 50);
ctx.fillText("Utility", 10, 70);
ctx.fillText("Consumer", 10, 90);
ctx.fillText("LOB", 10, 110);
ctx.fillText("Other", 10, 130);
ctx.fillStyle = "#F15A5A";//choose color for fill rect
ctx.fillRect(125, 36, 216, 14); //draw filled rect(x,y,width,height)
ctx.fillText("54%", 346, 50);
ctx.fillStyle = "#F0C419";//choose color for fill rect
ctx.fillRect(125, 56, 152, 14); //draw filled rect(x,y,width,height)
ctx.fillText("38%", 282, 70);
ctx.fillStyle = "#4EBA6F";//choose color for fill rect
ctx.fillRect(125, 76, 140, 14); //draw filled rect(x,y,width,height)
ctx.fillText("35%", 270, 90);
ctx.fillStyle = "#2D95BF";//choose color for fill rect
ctx.fillRect(125, 96, 88, 14); //draw filled rect(x,y,width,height)
ctx.fillText("22%", 218, 110);
ctx.fillStyle = "#955BA5";//choose color for fill rect
ctx.fillRect(125, 116, 96, 14); //draw filled rect(x,y,width,height)
ctx.fillText("24%", 226, 130);

ctx.fillStyle = "#708090";//choose color
ctx.font = "18px Arial";//Set font to "30px Arial" (font-size font)
//ctx.textAlign = "center";//choose centre of the text as a point for placement in the canvas' coordinate system 
ctx.fillText("Types of software built with HTML5", 10, 170);//("Text", x, y);

//draw circle
ctx.beginPath();//Begin a path
ctx.arc(130, 300, 100, 0, 0.87 * 2 * Math.PI);//build circle with (x,y,R,begining*Math.PI, ending*Math.PI)
ctx.strokeStyle = "#f15a5a";//stroke color
ctx.lineWidth = 20;//stroke width
ctx.stroke();//draw circle

ctx.beginPath();
ctx.arc(130, 300, 80, 0, 0.53 * 2 * Math.PI);
ctx.strokeStyle = "#f0c419";//stroke color
ctx.stroke();//draw circle

ctx.beginPath();
ctx.arc(130, 300, 60, 0, 0.29 * 2 * Math.PI);
ctx.strokeStyle = "#4eba6f";//stroke color
ctx.stroke();//draw circle

ctx.beginPath();
ctx.arc(130, 300, 40, 0, 0.07 * 2 * Math.PI);
ctx.strokeStyle = "#2D95BF";//stroke color
ctx.stroke();//draw circle
//end circle

ctx.fillStyle = "#2D95BF";//choose colour
ctx.font = "9px Arial";
ctx.fillText("7%", 160, 297);
ctx.fillStyle = "#4EBA6F";
ctx.fillText("29%", 180, 297);
ctx.fillStyle = "#F0C419";
ctx.fillText("53%", 200, 297);
ctx.fillStyle = "#F15A5A";
ctx.fillText("87%", 220, 297);

//draw line
ctx.beginPath();
ctx.lineWidth = 3;
ctx.strokeStyle = "#708090";
ctx.moveTo(300, 640);
ctx.lineTo(40, 640);
ctx.lineTo(40, 450);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#F15A5A";
ctx.moveTo(40, 640);
ctx.lineTo(100, 580);
ctx.lineTo(280, 500);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#F0C419";
ctx.moveTo(40, 640);
ctx.lineTo(200, 580);
ctx.lineTo(280, 450);
ctx.stroke();