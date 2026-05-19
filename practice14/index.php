//https://krilovets-nikita.kesug.com//
<?php
$lang = "uk";

if(isset($_POST['lang'])){
    $lang = $_POST['lang'];
    setcookie("lang", $lang, time() + (7 * 24 * 60 * 60));
}

elseif(isset($_COOKIE['lang'])){
    $lang = $_COOKIE['lang'];
}

$locales = [
    "uk" => "uk_UA.UTF-8",
    "en" => "en_US.UTF-8",
    "de" => "de_DE.UTF-8",
    "fr" => "fr_FR.UTF-8"
];

setlocale(LC_TIME, $locales[$lang]);

$date = strftime("%A, %d %B %Y %H:%M:%S");

$ip = $_SERVER['REMOTE_ADDR'];
?>

<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Дата і час</title>
</head>
<body>

<form method="POST">
    <select name="lang">
        <option value="uk">Українська</option>
        <option value="en">English</option>
        <option value="de">Deutsch</option>
        <option value="fr">Français</option>
    </select>

    <button type="submit">Зберегти</button>
</form>

<h2>Поточна дата і час:</h2>
<p><?php echo $date; ?></p>

<h2>IP користувача:</h2>
<p><?php echo $ip; ?></p>

</body>
</html>