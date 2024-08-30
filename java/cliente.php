<!-- comment 
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);
-->
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo AJAX com PHP, jQuery e PDO</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        #carregando {
            display: none;
            font-size: 16px;
            color: #007bff;
            margin-top: 10px;
        }

        #resultado {
            margin-top: 10px;
        }
    </style>
    <script>
        $(document).ready(function () {
            $('#enviar').click(function () {
                var nome = $('#nome').val(); // Obtém o valor do campo de texto

                // Exibe a animação de carregamento
                $('#carregando').show();

                $.ajax({
                    url: 'servidor.php',
                    type: 'POST',
                    data: { nome: nome },
                    success: function (response) {
                        $('#resultado').text(response); // Atualiza o conteúdo do elemento com a resposta
                        $('#carregando').hide(); // Esconde a animação de carregamento
                    },
                    error: function () {
                        $('#resultado').text('Erro na requisição.');
                        $('#carregando').hide(); // Esconde a animação de carregamento
                    }
                });
            });
        });
    </script>
</head>

<body>
    <h1>Exemplo AJAX com PHP, jQuery e PDO</h1>
    <form action="javascript:void(0);">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome">
        <button type="button" id="enviar">Enviar</button>
    </form>
    <div id="carregando">Carregando...</div>
    <div id="resultado"></div>
</body>

</html>