<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="scripts.js"></script>
</head>
<body>
    <?php
        $landErr = "";
        $naam = "";
        $nl = $en = $de = $es = $it = $fr = "";
        if(isset($_POST["submit"])){
            $naam = $_POST["naam"];
            $land = $_POST["land"];
            
            switch($land){
                case "NL": 
                    echo 'Goedemorgen '.$naam;
                    $nl = "selected";
                    break;
                case 'DE': 
                    echo 'Guten Morgen '.$naam;
                    $de = "selected";
                    break;
                case 'EN':
                    echo 'Good morning '.$naam;
                    $en = "selected";
                    break;
                case "FR":
                    echo "Bonjour ".$naam;
                    $fr = "selected";
                    break;
                case "ES":
                    echo "Ola " .$naam;
                    $es = "selected";
                    break;
                case "IT":
                    echo "Bien ".$naam;
                    $it = "selected";
                    break;
                default:
                    $landErr = "U moet een land kiezen";
            }
                    
        } 
    ?>
     <form method="post" action="">
        Naam: <input type="text" name="naam" placeholder="Uw naam" required value="<?php echo $naam ?>"/><br />  
        Land: <select id="land" name="land" >
            <option value="" selected>Maak uw keuze</option>
            <option value="NL" <?php echo $nl ?> >Nederland</option>
            <option value="DE" <?php echo $de ?>>Duitsland</option>
            <option value="EN" <?php echo $en ?>>Engeland</option>
            <option value="FR" <?php echo $fr ?>>Frans</option>
            <option value="ES" <?php echo $es ?>>Spaans</option>
            <option value="IT" <?php echo $it ?>>Italiaans</option>
        </select>
        <span class="error"><?php echo $landErr ?> </span>
        <br />
        <input type="submit" name="submit" value="gegevens versturen" />
    </form>
    
</body>
</html>
