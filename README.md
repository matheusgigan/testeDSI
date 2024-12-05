# Funcionalidades


    -   Botão de modo escuro
    -   Botão surpresa (janela modal com imagem e texto)


## Botão Escuro


    -   Funcionalidade escolhida :


![Tela Inicial Projeto Web](https://github.com/matheusgigan/testeDSI/blob/main/public/img/print7.png)


    -   Utilizei este site como modelo : https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp


```bash
        <!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {
  padding: 25px;
  background-color: white;
  color: black;
  font-size: 25px;
}


.dark-mode {
  background-color: black;
  color: white;
}
</style>
</head>
<body>


<h2>Toggle Dark/Light Mode</h2>
<p>Click the button to toggle between dark and light mode for this page.</p>


<button onclick="myFunction()">Toggle dark mode</button>


<script>
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
</script>


</body>
</html>




```


    -   Prompt : transforme a parte do script separada , em um script.js


![Tela Inicial Projeto Web](https://github.com/matheusgigan/testeDSI/blob/main/public/img/print4.png)       


    -   Prompt : quero que meus botoes fiquem no meio
       
![Tela Inicial Projeto Web](https://github.com/matheusgigan/testeDSI/blob/main/public/img/print1.png)


    -   Prompt : minha janela modal fica mudando a letra pra branco como deixar preto?


![Tela Inicial Projeto Web](https://github.com/matheusgigan/testeDSI/blob/main/public/img/print2.png)


    -   Prompt : quero que vc adicione no script mudar o texto quando apertar o botao pra modo claro e quando apertar de novo volte pra modo escuro


![Tela Inicial Projeto Web](https://github.com/matheusgigan/testeDSI/blob/main/public/img/print10.png)


    -  Resultado :


![Tela Inicial Projeto Web](https://github.com/matheusgigan/testeDSI/blob/main/public/img/print11.png)
![Tela Inicial Projeto Web](https://github.com/matheusgigan/testeDSI/blob/main/public/img/print12.png)




## Botão Surpresa


    -   Funcionalidade escolhida :


![Tela Inicial Projeto Web](https://github.com/matheusgigan/testeDSI/blob/main/public/img/print6.png)

    -   Utilizei a janela modal da senhora


![Tela Inicial Projeto Web](https://github.com/matheusgigan/testeDSI/blob/main/public/img/print3.png)


    -   Fiz alteraçao do texto que aparece e adicionei uma imagem


![Tela Inicial Projeto Web](https://github.com/matheusgigan/testeDSI/blob/main/public/img/print5.png)


    -  Resultado :


![Tela Inicial Projeto Web](https://github.com/matheusgigan/testeDSI/blob/main/public/img/print9.png)
![Tela Inicial Projeto Web](https://github.com/matheusgigan/testeDSI/blob/main/public/img/print8.png)
