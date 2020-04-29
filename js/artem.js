exports.forEach(function(element,index,array){//запускаем функцию перебора массива forEach. 
    console.log(element);
	document.write('<div id="Group-hero"><div class="hero"><img src="img/' + element.image + '">' + '<h2>' + element.name + '</h2>' + '<p>' + element.post + '</p></div>');//Тело функции, идеет подстановка элементов массива при переборе в нужные места кода.
	document.write('<div class="icon"><img src="img/icon.png"><span>');
	//Далее идет функция (передор в ппереборе) счетчик подчиненных. Увеличение переменной счетчика +1, когда id=parent 
	var idd = element.id;// Объявляем переменную и присваиваем ей значение id
	var idds = 0;// ставим счетчик подчиненных в значение 0. 
	exports.forEach(function(element,index,array){
	if (element.parent == idd) {idds++}
});//функция увеличения счетчика на 1, если при переборе id = parent
document.write(idds); // после перебора выводим результатирующую сумму подчиненных у id
	//document.write(idd);
	document.write('</span></div><a href=""></a></div>');//вставляем ниже остаток кода.
	
});