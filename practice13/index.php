<?php

header("Content-Type: application/json");

$file = "users.json";
$users = json_decode(file_get_contents($file), true);

$method = $_SERVER["REQUEST_METHOD"];
$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
$uri = explode("/", trim($path, "/"));
$id = $uri[2] ?? null;

if ($method == "GET" && !$id) {
    echo json_encode($users);
    exit;
}

if ($method == "GET" && $id) {
    foreach ($users as $u) {
        if ($u["id"] == $id) {
            echo json_encode($u);
            exit;
        }
    }
}

if ($method == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $new = [
        "id" => count($users) + 1,
        "name" => $data["name"],
        "email" => $data["email"]
    ];

    $users[] = $new;
    file_put_contents($file, json_encode($users));

    echo json_encode($new);
    exit;
}

if ($method == "PUT" && $id) {
    $data = json_decode(file_get_contents("php://input"), true);

    foreach ($users as &$u) {
        if ($u["id"] == $id) {
            $u["name"] = $data["name"];
            $u["email"] = $data["email"];
        }
    }

    file_put_contents($file, json_encode($users));

    echo json_encode(["status" => "updated"]);
    exit;
}

if ($method == "DELETE" && $id) {

    $users = array_filter($users, function($u) use ($id) {
        return $u["id"] != $id;
    });

    file_put_contents($file, json_encode(array_values($users)));

    echo json_encode(["status" => "deleted"]);
    exit;
}