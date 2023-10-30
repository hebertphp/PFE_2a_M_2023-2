let i,j;
//const saida=document.querySelector("#saida");
const saida=document.getElementById("saida");

for (i=0; i<3; i++) {//ext //minuto
  for (j=0; j<4; j++) {//int  //segundos
    saida.innerHTML+=`${i} ${j}<br>`;
  }
}
saida.innerHTML+=`<hr><hr>`;
/*
i  j
0  0
0  1
0  2
0  3
1  0
1  1
1  2
1  3
2  0
2  1
2  2
2  3
*/
// for(i=1;i<3;i++){
//     for(j=0;j<3;j++){
//         saida.innerHTML+=`${i} ${j}<br>`;
//     }
// }
/*
1 0
1 1
1 2
2 0
2 1
2 2
*/
let tabuada;

for(tabuada=1;tabuada<11;tabuada++){
    saida.innerHTML+=`<h2>Tabuada: ${tabuada}</h2>`;
    for(i=0;i<11;i++){
        saida.innerHTML+=`${tabuada} x ${i} = ${tabuada*i}<br>`;
    }
}    
/*
2 x 0 = 0
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
....
2 x 10 = 20
*/