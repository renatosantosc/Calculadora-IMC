function calculo_imc(){
    
    const massa = document.getElementById("massa").value;
    const altura = document.getElementById("altura").value;
    const idade = document.getElementById("idade").value;
    const sexo = document.getElementById("sexo").value;

    // Se colocar mais variaveis nesse if não é validado, por isso estão separados
    if(massa == ""){ 
        alert("Preencha todos os compos");
    }
    else if(altura == ""){
        alert("Preencha todos os compos")
    }
    else if(sexo == ""){
        alert("Preencha todos os compos")
    }
    else if(idade == ""){
        alert("Preencha todos os compos");
    }
    else if(idade != "" && idade < 10){

        alert("Desculpe, mas a idade mínima para o nosso cálculo é 10")
    }
    else{

        document.getElementById("resultado").style.display = "flex";
        let massa = document.getElementById("massa").value;
        let altura = document.getElementById("altura").value;
        let idade = document.getElementById("idade").value;
        let sexo = document.getElementById("sexo").value;
        let altura_cm = altura/100; // Transferindo o valor da altura de CM para M
        let resultado = massa / (altura_cm ** 2); // Calculo de IMC
        let decimal = parseFloat(resultado.toFixed(2)); // Float do resultado do IMC

        // funções relacionadas ao nível de estado de acordo com o resultado.
        function peso_abaixo(){
            document.getElementById("IMC").innerHTML = decimal;
            document.getElementById("IMC").style.color = "blue";
            document.getElementById("estado").style.color = "blue";
            document.getElementById("estado").innerHTML = "Abaixo do peso"
            document.querySelector(".b").style.display = "block"
        }

        function peso_abaixo_adulto(){
            document.getElementById("IMC").innerHTML = decimal;
            document.getElementById("IMC").style.color = "blue";
            document.getElementById("estado").style.color = "blue";
            document.getElementById("estado").innerHTML = "Abaixo do peso"
            document.querySelector(".b").style.display = "none"
        }

        function peso_normal(){
            document.getElementById("IMC").innerHTML = decimal;
            document.getElementById("IMC").style.color = "green";
            document.getElementById("estado").style.color = "green";
            document.getElementById("estado").innerHTML = "Adequado"
            document.querySelector(".b").style.display = "block"
        }

        function peso_normal_adulto(){
            document.getElementById("IMC").innerHTML = decimal;
            document.getElementById("IMC").style.color = "green";
            document.getElementById("estado").style.color = "green";
            document.getElementById("estado").innerHTML = "Peso Normal"
            document.querySelector(".b").style.display = "none"
        }

        function peso_acima(){
            document.getElementById("IMC").innerHTML = decimal;
            document.getElementById("IMC").style.color = "red";
            document.getElementById("estado").style.color = "red";
            document.getElementById("estado").innerHTML = "Sobrepeso"
            document.querySelector(".b").style.display = "block"
        }

        function pre_obesidade(){
            document.getElementById("IMC").innerHTML = decimal;
            document.getElementById("IMC").style.color = "#66cc00";
            document.getElementById("estado").style.color = "#66cc00";
            document.getElementById("estado").innerHTML = "Pré-obesidade"
            document.querySelector(".b").style.display = "none"
        }

        function obesidade_grau1(){
            document.getElementById("IMC").innerHTML = decimal;
            document.getElementById("IMC").style.color = "rgb(255, 136, 0)";
            document.getElementById("estado").style.color = "rgb(255, 136, 0)";
            document.getElementById("estado").innerHTML = "Obesidade Grau 1"
            document.querySelector(".b").style.display = "none"
        }

        function obesidade_grau2(){
            document.getElementById("IMC").innerHTML = decimal;
            document.getElementById("IMC").style.color = "rgb(255, 187, 0)";
            document.getElementById("estado").style.color = "rgb(255, 187, 0)";
            document.getElementById("estado").innerHTML = "Obesidade Grau 2"
            document.querySelector(".b").style.display = "none"
        }

        function obesidade_grau3(){
            document.getElementById("IMC").innerHTML = decimal;
            document.getElementById("IMC").style.color = "red";
            document.getElementById("estado").style.color = "red";
            document.getElementById("estado").innerHTML = "Obesidade Grau 3"
            document.querySelector(".b").style.display = "none"
        }
        // IMC masculino, entre 10 e 19 anos.
        if(idade >=10 && idade <=19 && sexo == "Masculino"){
            
            // IMC masculino de 10 anos.
            if(idade == 10 && resultado < 14.42){
                peso_abaixo();
            }
            else if(idade == 10 && resultado >= 14.42 && resultado < 19.60){
                peso_normal();
            }
            else if(idade == 10 && resultado >= 19.60){
                peso_acima();
            }

            // IMC masculino de 11 anos
            if(idade == 11 && resultado < 14.83){
                peso_abaixo();
            }
            else if(idade == 11 && resultado >= 14.83 && resultado < 20.35){
                peso_normal();
            }
            else if(idade == 11 && resultado >= 20.35){
                peso_acima();
            }

            //IMC masculino de 12 anos
            if(idade == 12 && resultado < 15.24){
                peso_abaixo();
            }
            if(idade == 12 && resultado >= 15.24 && resultado < 21.12){
                peso_normal();
            }
            if(idade == 12 && resultado >= 21.12){
                peso_acima();
            }

            //IMC masculino 13 anos
            if(idade == 13 && resultado < 15.73){
                peso_abaixo();
            }
            if(idade == 13 && resultado >= 15.73 && resultado < 21.93){
                peso_normal();
            }
            if(idade == 13 && resultado >= 21.93){
                peso_acima();
            }

            //IMC masculino de 14 anos.
            if(idade == 14 && resultado < 16.18){
                peso_abaixo();
            }
            if(idade == 14 && resultado >= 16.18 && resultado < 22.77){
                peso_normal();
            }
            if(idade == 14 && resultado >= 22.77){
                peso_acima();
            }

            //IMC masculino de 15 anos
            if(idade == 15 && resultado < 16.59){
                peso_abaixo();
            }
            if(idade == 15 && resultado >= 16.59 && resultado < 23.63){
                peso_normal();
            }
            if(idade == 15 && resultado >= 23.63){
                peso_acima();
            }

            //IMC masculino 16 anos
            if(idade == 16 && resultado < 17.01){
                peso_abaixo();
            }
            if(idade == 16 && resultado >= 17.01 && resultado < 24.45){
                peso_normal();
            }
            if(idade == 16 && resultado >= 24.45){
                peso_acima();
            }

            //IMC masculino 17 anos.
            if(idade == 17 && resultado < 17.31){
                peso_abaixo();
            }
            if(idade == 17 && resultado >= 17.31 && resultado < 25.28){
                peso_normal()
            }
            if(idade == 17 && resultado >= 25.28){
                peso_acima();
            }

            //IMC masculino de 18 anos
            if(idade == 18 && resultado < 17.54){
                peso_abaixo();
            }
            if(idade == 18 && resultado >= 17.54 && resultado < 25.95){
                peso_normal();
            }
            if(idade == 18 && resultado >= 25.95){
                peso_acima();
            }

            //IMC masculino de 19 anos.
            if(idade == 19 && resultado < 17.80){
                peso_abaixo();
            }
            if(idade == 19 && resultado >= 17.80 && resultado < 26.36){
                peso_normal();
            }
            if(idade == 19 && resultado >= 26.36){
                peso_acima();
            }
        }


        // IMC Feminino abaixo de 19 anos
        // Mesmo cálculo do masculino mais com código diferente (teste)
        if(idade >=10 && idade <=19 && sexo == "Feminino"){
            
            // IMC Feminino de 10 anos.
            if(idade == 10){
                if(resultado < 14.23){
                    peso_abaixo();
                }
                else if(resultado >= 14.23 && resultado < 20.19){
                    peso_normal();
                }
                else if(resultado >= 20.19){
                    peso_acima();
                }
            }
            // IMC Feminino de 11 anos
            if(idade == 11){
                if(resultado < 14.60){
                    peso_abaixo();
                }
                else if(resultado >= 14.60 && resultado < 21.18){
                    peso_normal();
                }
                else if(resultado >= 21.18){
                    peso_acima();
                }
            }
            //IMC Feminino de 12 anos
            if(idade == 12){
                if(resultado < 14.98){
                    peso_abaixo();
                }
                else if(resultado >= 14.98 && resultado < 22.17){
                    peso_normal();
                }
                else if(resultado >= 22.17){
                    peso_acima();
                }
            }
            //IMC Feminino 13 anos
            if(idade == 13){
                if(resultado < 15.36){
                    peso_abaixo();
                }
                else if(resultado >= 15.36 && resultado < 23.08){
                    peso_normal();
                }
                else if(resultado >= 23.08){
                    peso_acima();
                }
            }
            //IMC Feminino de 14 anos.
            if(idade == 14){
                if(resultado < 15.67){
                    peso_abaixo();
                }
                else if(resultado >= 15.67 && resultado < 23.88){
                    peso_normal();
                }
                else if(resultado >= 23.88){
                    peso_acima();
                }
            }
            //IMC Feminino de 15 anos
            if(idade == 15){
                if(resultado < 16.01){
                    peso_abaixo();
                }
                else if(resultado >= 16.01 && resultado < 24.74){
                    peso_normal();
                }
                else if(resultado >= 24.74){
                    peso_acima();
                }
            }
            //IMC Feminino 16 anos
            if(idade == 16){
                if(resultado < 16.37){
                    peso_abaixo();
                }
                else if(resultado >= 16.37 && resultado < 24.74){
                    peso_normal();
                }
                else if(resultado >= 24.74){
                    peso_acima();
                }
            }
            //IMC Feminino 17 anos.
            if(idade == 17){
                if(resultado < 16.59){
                    peso_abaixo();
                }
                else if(resultado >= 15.59 && resultado < 25.23){
                    peso_normal();
                }
                else if(resultado >= 25.23){
                    peso_acima();
                }
            }
            //IMC Feminino de 18 anos
            if(idade == 18){
                if(resultado < 16.71){
                    peso_abaixo();
                }
                else if(resultado >= 16.71 && resultado < 25.56){
                    peso_normal();
                }
                else if(resultado >= 25.56){
                    peso_acima();
                }
            }
            //IMC Feminino de 19 anos.
            if(idade == 19){
                if(resultado < 16.87){
                    peso_abaixo();
                }
                else if(resultado >= 16.87 && resultado < 25.85){
                    peso_normal();
                }
                else if(resultado >= 25.85){
                    peso_acima();
                }
            }
        }
        // IMC masculino e Feminino a partir de 20 anos.
        if(idade >= 20){

            if(sexo == "Masculino" || sexo == "Feminino"){

                if(resultado <= 18.50){
                    peso_abaixo_adulto();
                }

                if(resultado > 18.50 && resultado < 24.9){
                    peso_normal_adulto();
                }

                if(resultado >= 25.0 && resultado < 29.9){
                    pre_obesidade();
                }

                if(resultado >= 30.0 && resultado < 34.9){
                    obesidade_grau1();
                }

                if(resultado >= 35.0 && resultado < 39.9){
                    obesidade_grau2();
                }

                if(resultado >= 40.0){
                    obesidade_grau3();
                }
            }
        
        }
    }
}

function resetar(){
    // reset dos compos de imput e da caixa de resultado
    document.getElementById("massa").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("sexo").value = "";
    document.getElementById("resultado").style.display = "none";
}

