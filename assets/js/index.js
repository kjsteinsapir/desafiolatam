

/*HTML*/
var html1 = document.getElementById("html1");
var html2 = document.getElementById("html2");
var html3 = document.getElementById("html3");
var promedio_html = document.getElementById("promedio_html");

var nota1_html=+prompt("Ingrese nota 1 del ramo HTML");
var nota2_html=+prompt("Ingrese nota 2 del ramo HTML");
var nota3_html=+prompt("Ingrese nota 3 del ramo HTML");
var promedionotas_html=((nota1_html+nota2_html+nota3_html)/3).toFixed(2);

html1.innerHTML = nota1_html;
html2.innerHTML = nota2_html;
html3.innerHTML = nota3_html;
promedio_html.innerHTML = promedionotas_html;

/*CSS*/

var css1 = document.getElementById("css1");
var css2 = document.getElementById("css2");
var css3 = document.getElementById("css3");
var promedio_css = document.getElementById("promedio_css");

var nota1_css=+prompt("Ingrese nota 1 del ramo css");
var nota2_css=+prompt("Ingrese nota 2 del ramo css");
var nota3_css=+prompt("Ingrese nota 3 del ramo css");
var promedionotas_css=((nota1_css+nota2_css+nota3_css)/3).toFixed(2);

css1.innerHTML = nota1_css;
css2.innerHTML = nota2_css;
css3.innerHTML = nota3_css;
promedio_css.innerHTML = promedionotas_css;

/*JS*/

var js1 = document.getElementById("js1");
var js2 = document.getElementById("js2");
var js3 = document.getElementById("js3");
var promedio_js = document.getElementById("promedio_js");


var nota1_js = +prompt("Ingrese nota 1 del ramo Javascript");
var nota2_js = +prompt("Ingrese nota 2 del ramo Javascript");
var nota3_js = +prompt("Ingrese nota 3 del ramo Javascript");
var promedionotas_js = ((nota1_js+nota2_js+nota3_js)/3).toFixed(2);



js1.innerHTML = nota1_js;
js2.innerHTML = nota2_js;
js3.innerHTML = nota3_js;
promedio_js.innerHTML = promedionotas_js;


