<?php
//Перше
$name = "Alex";
$age = 30;
$is_student = true;
echo "My name is " . $name . ", I am " . $age . " years old, and I am a student: " . ($is_student ? "Yes" : "No") . ".";

echo "<br>";

$numbers = [1, 2, 3, 4, 5];
$sum = array_sum($numbers);
echo $sum;

echo "<br>";

$user = [
    "name" => "Alex",
    "email" => "alex@example.com",
    "phone" => "+380123456789"
];
echo "<ul>";
echo "<li>Name: " . $user["name"] . "</li>";
echo "<li>Email: " . $user["email"] . "</li>";
echo "<li>Phone: " . $user["phone"] . "</li>";
echo "</ul>";

echo "<br>";

$age = 20;
if ($age > 18) {
    echo "Більше 18";
} else {
    echo "18 або менше";
}
echo "<br>";

$grade = 85;
if ($grade >= 90) {
    echo "Відмінно";
} else if ($grade >= 70) {
    echo "Добре";
} else if ($grade >= 50) {
    echo "Задовільно";
} else {
    echo "Незадовільно";
}
echo "<br>";

//Друге
$a = 5;
$b = 10;
$sum = $a + $b;
echo "Сума: " . $sum;
echo "<br>";
$minus = $a - $b;
echo "Різниця: " . $minus;
echo "<br>";
$product = $a * $b;
echo "Добуток: " . $product;
echo "<br>";
$dill = $a / $b;
echo "Ділення: " . $dill;
echo "<br>";

$t = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
echo "Третій та п'ятий дні тижня: " . $t[2] . ", " . $t[4];
echo "<br>";

$day = "Monday";
switch ($day) {
    case "Monday":
        echo "Понеділок";
        break;
    case "Tuesday":
        echo "Вівторок";
        break;
    case "Wednesday":
        echo "Середа";
        break;
    case "Thursday":
        echo "Четвер";
        break;
    case "Friday":
        echo "П'ятниця";
        break;
    case "Saturday":
        echo "Субота";
        break;
    case "Sunday":
        echo "Неділя";
        break;
    default:
        echo "Невірний день";
}
echo "<br>";

$x = 15;

if ($x % 2 == 0) {
    echo "Парне";
} else {
    echo "Непарне";
}
echo "<br>";

//Третє
$price1 = 100;
$price2 = 200;
$price3 = 150;
$all = $price1 + $price2 + $price3;
echo $all;
echo "<br>";

$movies = ["Film1", "Film2", "Film3", "Film4", "Film5"];
foreach ($movies as $movie) {
    echo $movie . "<br>";
}
echo "<br>";

$k = [
    "login" => "user1",
    "password" => "12345",
    "email" => "user@example.com"
];
echo $k["login"] . "<br>";
echo $k["password"] . "<br>";
echo $k["email"] . "<br>";

$pr1 = 200;
$pr2 = 200;
$pr3 = 200;
$total = $pr1 + $pr2 + $pr3;
if ($total > 500) {
    $total = $total * 0.9;
}
echo $total;
echo "<br>";

$login = "admin";
$password = "1234";

if ($login == "admin" && $password == "1234") {
    echo "Успішний вхід";
} else {
    echo "Невірний логін або пароль";
}
echo "<br>";

//Четрверте
$a = 10;
$b = 20;

if ($a > $b) {
    echo "Max: $a, Min: $b";
} else {
    echo "Max: $b, Min: $a";
}
echo "<br>";

$y = [10, 20, 30, 40, 50];
$sum = array_sum($y);
$s = $sum / count($y);
echo "Середнє: " . $s;
echo "<br>";

$students = [
    "Іван Петренко" => 85,
    "Олія Шевченко" => 78,
    "Андрій Бондар" => 92,
];
foreach ($students as $name => $grade) {
    if ($grade > 80) {
        echo $name . " - " . $grade . "<br>";
    }
}
echo "<br>";

$num = 12;
if ($num % 3 == 0 || $num % 5 == 0) {
    echo "Кратне 3 або 5";
} else {
    echo "Не кратне";
}
echo "<br>";

$num = 7;
for ($i = 1; $i <= 10; $i++) {
    echo $num . " x " . $i . " = " . ($num * $i) . "<br>";
}
echo "<br>";

//П'яте
$first_name = "Alex";
$last_name = "Smith";
$year_of_birth = 1990;
$full_name = $first_name . " " . $last_name;
$year = 2025 - $year_of_birth;
echo $full_name;
echo "<br>";
echo $year;

$countries = ["Ukraine", "Poland", "Germany", "France"];

echo "<ol>";
echo "<li>{$countries[0]}</li>";
echo "<li>{$countries[1]}</li>";
echo "<li>{$countries[2]}</li>";
echo "<li>{$countries[3]}</li>";
echo "</ol>";
echo "<br>";

$cities = [
    "Kyiv" => 3000000,
    "Lviv" => 700000,
    "Odesa" => 1000000,
    "Kharkiv" => 1400000
];

foreach ($cities as $city => $population) {
    if ($population > 1000000) {
        echo $city . "<br>";
    }
}

$num = 8;
if($num % 2 == 0){
    echo $num . " " . " - парне";   
} else {
    echo $num . " " . " - непарне";
}
echo "<br>";

$year = date("Y");
if ($year % 4 == 0) {
    echo "Високосний рік";
} else {
    echo "Не високосний рік";
}