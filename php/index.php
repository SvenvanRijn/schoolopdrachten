<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pizza's Bestellen</title>
</head>
<body>
    <?php 
        $besteldatum = new DateTime("now");
    ?>

    <form action="" method="post">
        <label for="margherita">Pizza margherita</label> 

        <label for="name">Naam:</label>
        <br>
        <input type="text" id="name" name="name" placeholder="Naam" value="" maxlength="100" required>
        <br>
        <label for="adres">Adres:</label>
        <br>
        <input type="text" id="adres" name="adres" placeholder="Adres" value="" required>
        <br>
        <label for="postcode">Postcode:</label>
        <br>
        <input type="text" id="postcode" name="postcode" placeholder="1234AB" value="" maxlength="6" pattern="[0-9]{4}[A-Za-z]{2}" required>
        <br>
        <label for="plaats">Plaats:</label>
        <br>
        <input type="text" id="plaats" name="plaats" placeholder="Plaats" value="" maxlength="100" required>
        <br>
        <label for="besteldatum">Besteldatum:</label>
        <br>
        <input type="date" id="besteldatum" name="besteldatum" placeholder="Besteldatum" value= "<?php echo $besteldatum->format("Y-m-d"); ?>" readonly required>
        <br>
        <label for="bestellen">Bestellen of afhalen?</label>
        <br>
        <input type="radio" id="bestellen" name="bestellen" value="Bestellen" required>
        <label for="bestellen">Bestellen (€5)</label> 
        <br>
        <input type="radio" id="afhalen" name="bestellen" value="Afhalen" required>
        <label for="afhalen">Afhalen</label> 
        <br>
        <br>
        <input type="submit" value="Submit">
    </form>
    <?php
        if(isset($_POST["submit"])){

        }
    ?>
</body>
</html>