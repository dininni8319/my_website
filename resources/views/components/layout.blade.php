<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/app.css">
    <link rel="shortcut icon" href="/logo2.png" type="image/x-icon"/>
    <title>{{$title ?? 'Salvatore Dininni'}}</title>
</head>
<body>
    <x-navbar />

     {{$slot}}
     
     <x-form /> 
     <script src="{{asset('js/app.js')}}"></script>
</body>
</html>