<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contact Mail</title>
    <link rel="stylesheet" href="css/app.css">
</head>
<body>

   
    
    <h2>Contact received from: <strong>{{$contact['name']}}</strong></h2> 
        <ul>
            <li>{{$contact['email']}}</li>
            <li>{{$contact['phone']}}</li>
            <li>{{$contact['subject']}}</li>
            <li>{{$contact['message']}}</li>
        </ul>   
</body>
</html> 