function Imprimir1al100(){
    /*Primer segmento
      Valores iniciales a las variables en ese segmento
      Segundo segmento
      Condicion o condiciones agrupadas con operadores logicos
      Tercer segmento
      Operaciones de aumento con disminucion
      */
    i=1;
    while(i<101){//i=i+2
       console.log(i);
       i++;
   }
}
/Imprimir los numeros multiplos de 3/
function Imprimirmultiplos3(){
    i=0;
    while(i<=101){//i=i+3
       console.log(i);
       i+=3;
}
}
function Imprimirmultiplos32(){
    i=1;
    while(i<=101){
       if(i%3==0)
           console.log(i);
           i++;
       }
}

/Imprimir la suma de los numeros impares, y la suma de los numeros pares menor a 50/
function ImprimirParesImpares(){
   par=0;
   impar=0;
   i=1;
    while(i<=50){
       impar+=i;
       par+=i+1;
       i+=2;
   }
 console.log(par);
 console.log(impar);
}
function ImprimirParesImpares2(){
   par=0;
   impar=0;
   i=1;
   while(i<=50){
       if(i%2==1)impar+=i;
       else par+=i;
       i++;
   }
 console.log(par);
 console.log(impar);
}
function ParesImparesWhile(){
   par=0;
   impar=0;
   i=1;//Valores iniciales
   while(i<=50){//condicionales
       impar+=i;
       par+=i+1;
       i+=2;//Valor de avance
   }
 console.log(par);
 console.log(impar);
}
function Serie4(){
    //3 4 5 3 4 5...
    N=8
    v=1;
    x=3;
    while(v<=N){
        console.log(x);
        if(x==5){
            x=2;
        }
        x++;
        v++;//valor de avance
    }
}
function Serie41(){
    //3 4 5 3 4 5...
    N=8
    v=1;
    let A=[];
    A[v-1]=3;
    while(v<=N){
        console.log(A[v-1]);
        if(v%3==0)A.push(3);
        else A.push(A[v-1]+1);
        v++;//valor de avance
    }
}
function Serie3(){
    N=8;
    x=1,s=1,i=1;
    while(i<=N){
        console.log(s*x);
        if(x==2){
            x=0;
            s*=-1;
        }
        i++,x++;
    }
}
    function Serie2(){
    N=8;
    x=-1,i=1;
    while(i<=N){
        console.log(x);
        i++,x*=-1;
        }
}
function Serie1(){
    i=1;
    while(i<=8){
        if(i%2==1){
        console.log("1")
        }
        else{
        console.log("0")
        }
        i++;
    }
 }