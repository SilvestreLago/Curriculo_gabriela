<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrinho</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <H1>CARRINHO</H1>
    </header>
    <main>
        <div>
            <p>
                <?php
                    $padrão = numfmt_create("pt_BR", NumberFormatter::CURRENCY);
                    $BQV = intval($_POST["BvQtd"]);
            
                    $BQF = intval($_POST["BfQtd"]);
            
                    $BQH = intval($_POST["BhQtd"]);
                    $BH = $BQH * 20;
                    $BV = $BQV * 25;
                    $BF = $BQF * 10;
                    $VT = $BV + $BF + $BH;
                    function emp($BQV, $BQF, $BQH){
                        if (empty($BQV) and empty($BQF) and empty($BQH)){
                            echo "<p>PEDIDO VAZIO</p>";
                        }
                    }
                        if (empty($BQV)){
                            echo "";
                        }
                        else{
                            echo "<p>$BQV bolas de voleibol lhe custaram: " . numfmt_format_currency($padrão, $BV, "BRL") . "<br> </p>";
                        }
            
                        if (empty($BQF)){
                            echo "";
                        }
                        else{
                            echo "<p>$BQF bolas de futsal lhe custaram: " . numfmt_format_currency($padrão, $BF, "BRL") . "<br></p>";
                        }
            
                        if (empty($BQH)){
                            echo "";
                        }
                        else{
                            echo "<p>$BQH bolas de handebol lhe custaram: " . numfmt_format_currency($padrão, $BH, "BRL") . "<br></p>";
                        }
            
                        if(!empty($BQV) or !empty($BQF) or !empty($BQH)){
                            echo "<p>Sua compra total foi de: ". numfmt_format_currency($padrão, $VT, "BRL") ."<br></p>";
                        }
                        emp($BQV, $BQF, $BQH);
            
                ?>
            </p>
            <button onclick="javascript:window.history.go(-1)" class="btn">&#x2B05;Voltar</button>
        </div>
        
    </main>
</body>
</html>