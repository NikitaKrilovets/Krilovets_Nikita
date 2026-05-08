<?php
session_start();

if (!isset($_SESSION['name']) || !isset($_SESSION['email'])) {
    header("Location: register.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Профіль</title>
</head>
<body>
    <h1>Вітаємо! Ви увійшли в профіль.</h1>
    <a href="logout.php">
        <button>Вийти</button>
    </a>
</body>
</html>