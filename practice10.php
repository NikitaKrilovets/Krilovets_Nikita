<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    //Варіант 2
    <br><br>
    <?php
    function isValidLogin($login) {
        return filter_var($login, FILTER_VALIDATE_REGEXP, [
            "options" => ["regexp" => "/^[a-zA-Z0-9]+$/"]
        ]);
    }

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $login = $_POST["login"] ?? "";
        $pass = $_POST["password"] ?? "";
        $confirm = $_POST["confirm"] ?? "";

        if (!isValidLogin($login)) {
            echo "Поганий логін";
        } elseif ($pass !== $confirm) {
            echo "Паролі не співпадають";
        } else {
            echo "Успішна реєстрація";
        }
    }
    ?>
    <h1>Реєстрація користувача</h1>
    <form method="post">
        <input name="login" placeholder="login"><br><br>
        <input type="password" name="password" placeholder="password"><br><br>
        <input type="password" name="confirm" placeholder="confirm"><br><br>
        <button>Відправити</button>
    </form>
    <br><br>
    //Варіант 3
    <?php
    function clean($data) {
        return htmlspecialchars(trim($data));
    }

    $errors = [];
    $name = $age = $gender = $about = "";
    $hobbies = [];

    if ($_SERVER["REQUEST_METHOD"] === "POST") {

        $name = clean($_POST["name"] ?? "");
        $age = clean($_POST["age"] ?? "");
        $gender = $_POST["gender"] ?? "";
        $about = clean($_POST["about"] ?? "");
        $hobbies = $_POST["hobbies"] ?? [];

        if ($name === "") {
            $errors["name"] = "Enter name";
        }

        if (!filter_var($age, FILTER_VALIDATE_INT, ["options" => ["min_range" => 10, "max_range" => 100]])) {
            $errors["age"] = "Age 10-100";
        }

        if (!$gender) {
            $errors["gender"] = "Choose gender";
        }

        if (empty($errors)) {
            echo "Success";
        }
    }
    ?>
    <h1>Ще одна форма реєстрації</h1>
    <form method="post">
        <input name="name" value="<?= $name ?>" placeholder="Name"><br><br>
        <div><?= $errors["name"] ?? "" ?></div>

        <input name="age" value="<?= $age ?>" placeholder="Age"><br><br>
        <div><?= $errors["age"] ?? "" ?></div>

        <label><input type="radio" name="gender" value="male" <?= $gender=="male"?"checked":"" ?>>Male</label>
        <label><input type="radio" name="gender" value="female" <?= $gender=="female"?"checked":"" ?>>Female</label>
        <br><br>
        <div><?= $errors["gender"] ?? "" ?></div>

        <label><input type="checkbox" name="hobbies[]" value="sport" <?= in_array("sport",$hobbies)?"checked":"" ?>>Sport</label>
        <label><input type="checkbox" name="hobbies[]" value="music" <?= in_array("music",$hobbies)?"checked":"" ?>>Music</label>
        <br><br>

        <textarea name="about"><?= $about ?></textarea>
        <br><br>

        <button>Відправити</button>
    </form>
</body>
</html>