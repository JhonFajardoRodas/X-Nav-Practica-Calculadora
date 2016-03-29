$(document).ready(function() {
    // Code to run after document is loaded
    var operador = undefined;
    var newNumber = "0";

    $("input").click(function(){
    //  $("#screen").html("");
      str = $(this).val();

      if(str=="C"){
        $("#screen").html("");
      }else if(str=="CE"){
        var element = document.getElementById("screen")
        num = element.innerHTML;
        n = num.length;
        new_num = num.substring(0,n-1);
        $("#screen").html(new_num);
      }else if((str == "-")||(str=="+")||(str=="*") || (str=="/")){
        operador = str;
        var element = document.getElementById("screen")
        num1 =  element.innerHTML;
        $("#screen").html(num1 + operador);
      }else if(str=="="){
        console.log(operador)
        var element = document.getElementById("screen")
        num2 =  element.innerHTML;
        num2 = num2.split(operador);
        console.log("operando 1 " + num1);
        console.log("operando 2 " + num2[1]);
        if(operador == "+"){
          resultado = parseFloat(num1) + parseFloat(num2[1]);
        }else if(operador=="-"){
          resultado = parseFloat(num1) - parseFloat(num2[1]);
        }else if(operador == "*"){
          resultado = parseFloat(num1) * parseFloat(num2[1]);
        }else{
          resultado = parseFloat(num1) / parseFloat(num2[1]);
        }

        $("#screen").html(resultado);
        newNumber="1";

      }else{
        if(newNumber=="0"){
          $("#screen").append(str);
        }else{
          $("#screen").html(str);
          newNumber="0";
        }

      }

    });

    $("body").keypress(function(event){
      //console.log(String.fromCharCode(event.which) + event.which);
      console.log("TECLA DADA  " + event.which)
      //event.preventDefault();

      if(event.which == 43){
        operador = "+";
      }else if(event.which == 42){
        operador = "*";
      }else if(event.which == 47){
        operador = "/";
      }else if(event.which == 45){
        operador = "-";
      }
        element = document.getElementById("screen")
      console.log(" -- " + element.innerHTML)
      if(event.keyCode == 13){
        element = document.getElementById("screen")
        console.log("dentro del igual " + element.innerHTML)
        console.log(operador)
        operandos = (element.innerHTML).split(operador)
        op1 = operandos[0]
        op2 = operandos[1]
        resultado = eval(op1 + operador + op2);
        $("#screen").html(resultado)
      }else{
        $("#screen").append(String.fromCharCode(event.which));
      }
    });

});
