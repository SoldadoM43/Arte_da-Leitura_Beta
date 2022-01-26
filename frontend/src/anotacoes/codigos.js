<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        
        const Funcoes = () => {
            $(function(){
                function IsEmail(email){
                    let reg = new RegExp( /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
                    if (reg.test(email)){
                    return true; }
                    else{
                    return false;
                }
            }
            var val_email, val_senha, val_senha2;    
                function valida(){
                   
                   $('#validator')
                   .prop('disabled', val_email && val_senha && val_senha2 ? false : true);
                   
                }
                function validarEmail(){
                   var email = $("#email").val().trim();
                   // só irá verificar se os campos tiverem algo  
                      if(!IsEmail(email)){
                         $("#message")
                         .html("Email Inválido")
                         .css('color', 'red');
                         val_email = false;
                      }else{
                         $("#message")
                         .html("Email ok")
                         .css('color', 'green');
                         val_email = true;
                      }
                      // chama a função de controle do botão
                      valida();
                }
                function validarSenha(){
                   var senha = $("#senha").val();
                   var senha2 = $("#senha2").val();
                   // só irá verificar se os campos tiverem algo
                   if(senha && senha2){
                      if(senha.length < 8 || senha.length > 10){
                         $("#divCheckPassword2")
                         .html("As senhas precisam ter no mínimo 8 caracteres e no máximo 10")
                         .css('color', 'black');
                         val_senha = false;
                      }else{
                         $("#divCheckPassword2")
                         .html("8 caracteres e no máximo 10")
                         .css('color', 'green');
                         val_senha = true;
                      }
                      if(senha != senha2){
                         $("#divCheckPassword")
                         .html("As senhas não são iguais")
                         .css('color', 'red');
                         val_senha2 = false;
                      }else{
                         $("#divCheckPassword").html("Senhas idênticas")
                         .css('color', 'green');
                         val_senha2 = true;
                      }
                      // chama a função de controle do botão
                      valida();
                   }
                }
                $('#email, #email2').on('keyup', validarEmail);
                $('#senha, #senha2').on('keyup', validarSenha);
             });
            function TestarCPF() {
                var strCPF = $("#cpf").val();
                strCPF = strCPF.replace(".", "").replace("-","").replace(".", "");
                var Soma;
                var Resto;
                Soma = 0;
                if (strCPF == "00000000000") 
                    return false;
                for (i=1; i<=9; i++) 
                Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
                Resto = (Soma * 10) % 11;
                if ((Resto == 10) || (Resto == 11)) Resto = 0;
                if (Resto != parseInt(strCPF.substring(9, 10)) ) 
                    return false;
                Soma = 0;
                for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
                Resto = (Soma * 10) % 11;
                if ((Resto == 10) || (Resto == 11))  Resto = 0;
                    if (Resto != parseInt(strCPF.substring(10, 11) ) ) 
                        return false;
                    return true;
            }
            function VerificarCPF() {
                var retorno = TestarCPF();
                console.log(retorno);
                if (!retorno){
                    //document.getElementById("CPFInvalido").style.visibility = "visible";
                    $("#CPFInvalido")
                    .html("CPF Inválido")
                    .css('color', 'red');
                }else{
                    //document.getElementById("CPFInvalido").style.visibility = "hidden";
                    ("#CPFInvalido")
                    .html("CPF Válido")
                    .css('color', 'green');
                }
                return retorno;
            }
        }