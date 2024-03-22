<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Preview</title>
</head>

<body>
    <h1>Preview</h1>
    <?php
    function displayField($fieldName, $displayName)
    {
        if (empty($_POST[$fieldName])) {
            echo "$displayName not provided!<br>";
        } else {
            echo "$displayName: " . $_POST[$fieldName] . "<br>";
        }
    }

    displayField('name', 'Name');
    displayField('username', 'Username');
    displayField('address', 'Address');
    displayField('country', 'Country');
    displayField('zip', 'Zip');
    displayField('email', 'Email');
    displayField('about', 'About');
    // Add similar function calls for other fields as needed
    if (empty($_POST[$fieldName])) {
        echo "password field is not provided!<br>";
    }

    ?>
</body>

</html>