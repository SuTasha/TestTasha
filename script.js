var signButton = document.getElementById("button");
console.log(signButton);

function chekEvent(event){
	event.preventDefault();  /*предотвратить событие по умолчанию*/
	
    var name = document.getElementById("name");
    var valueName = name.value;    /*получаем значение, которое ввели*/

    if (valueName === ''){
    	name.style.border= "2px solid red";
    	console.log("Нет логина");
    } else {
    	name.style.border= "1px solid gray";
    }

    var mail = document.getElementById("mail");
    var valueMail = mail.value;    /*получаем значение, которое ввели*/

    if (valueMail === ''){
    	mail.style.border= "2px solid red";
    	console.log("Нет адреса почты");
    } else {
    	mail.style.border= "1px solid gray";
    }

    if (valueMail, valueName != ''){
    	alert ("Спасибо, Ваше сообщение отправлено!");
    }
}
signButton.addEventListener('click', chekEvent); 

