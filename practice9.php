<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    //Варіант 2, завдання 1
    <?php
function isStrongPassword($p){
    return preg_match('/[A-Z]/',$p) && preg_match('/[0-9]/',$p) && strlen($p)>=8;
}

function generatePassword($len, $cb, $count){
    $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    $out = [];

    while(count($out) < $count){
        $p = '';
        for($i = 0; $i < $len; $i++)
            $p .= $chars[random_int(0, strlen($chars)-1)];
        if($cb($p)) $out[] = $p;
    }
    return $out;
}

if($_POST){
    $res = generatePassword($_POST['length'], 'isStrongPassword', $_POST['count']);
}
?>

<form method="post">
<p>Кількість паролів:</p>
<input name="count">
<p>Довжина пароля:</p>
<input name="length">
<br><br>
<button>go</button>
</form>

<?= !empty($res) ? implode("<br>", $res) : "" ?>
<br><br>
//Варант 4, завдання 2
<?php

$transactions = [
    ["amount"=>100, "type"=>"in", "date"=>"2026-01-01"],
    ["amount"=>50,  "type"=>"out","date"=>"2026-01-02"],
    ["amount"=>200, "type"=>"in", "date"=>"2026-01-03"],
    ["amount"=>70,  "type"=>"out","date"=>"2026-01-04"],
];

function isOutgoing($t){
    return $t["type"] === "out";
}

function calculateTotal($transactions, $filter){
    $filtered = array_filter($transactions, $filter);
    return array_sum(array_column($filtered, "amount"));
}

$out = array_filter($transactions, "isOutgoing");
$total = calculateTotal($transactions, "isOutgoing");
?>

<table border="1">
<tr><th>Amount</th><th>Type</th><th>Date</th></tr>

<?php foreach($out as $t): ?>
<tr>
    <td><?= $t["amount"] ?></td>
    <td><?= $t["type"] ?></td>
    <td><?= $t["date"] ?></td>
</tr>
<?php endforeach; ?>

</table>

<h3>Total: <?= $total ?></h3>
</body>
</html>