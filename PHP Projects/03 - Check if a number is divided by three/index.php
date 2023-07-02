<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>PHP Ödev</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
</head>

<body class="bg-dark text-white">

    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3 p-5">
                <form action="form.php" method="get">
                    <div class="mb-3">
                        <label for="sayi" class="form-label">Bir sayı giriniz</label>
                        <input type="number" class="form-control" id="sayi" name="sayi" aria-describedby="sayi">
                    </div>
                    <button type="submit" class="btn btn-primary">Gönder</button>
                </form>
                <div id="result"></div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <script>
        const resultDiv = document.getElementById("result");
        const urlParams = new URLSearchParams(window.location.search);
        const message = urlParams.get('message');
        if (message !== null) {
            resultDiv.innerHTML = message;
        }
    </script>
</body>

</html>
