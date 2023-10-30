const saida=document.getElementById("saida");
let x,y;
x=10;
x=20;
x=3;
saida.innerHTML=`x=${x}<hr>`;
// 0  1  2 
y=[10,20,3];
saida.innerHTML+=`y=${y}<hr>`;
saida.innerHTML+=`y[1]=${y[1]}<hr>`;
let valores = ["SP",7.5,2023];
saida.innerHTML+=valores[0]+"<hr>";
let arr=[2023,2,"Hoje"];
arr[0]++;//2024
arr[1]=arr[0]%2;//0
arr[2]+=" em dia";//"Hoje em dia"
saida.innerHTML+=`${arr[0]}<br>${arr[1]}<br>${arr[2]}<hr>`;
//               0          1           2       3        4         5           6
let semana = ["DOMINGO", "SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA", "SÁBADO"];
for (i = 0; i < 7; i++){
    if(i>0 && i<6){semana[i]+="-FEIRA"}
    saida.innerHTML+=`${semana[i]}  é o ${i+1}o dia da semana!<br>`;
}
/*
Lição de casa!!!!!
DOMINGO é o 1o dia da semana!
SEGUNDA-FEIRA é o 2o dia da semana!
TERÇA-FEIRA é o 3o dia da semana!
QUARTA-FEIRA é o 4o dia da semana!
QUINTA-FEIRA é o 5o dia da semana!
SEXTA-FEIRA é o 6o dia da semana!
SÁBADO é o 7o dia da semana!
*/