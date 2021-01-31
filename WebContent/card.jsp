<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">

<title>BlackJack</title>

<!-- Bootstrap core CSS -->
<link href="assets/vendor/bootstrap/css/bootstrap.min.css"
	rel="stylesheet">

<!-- Custom styles for this template -->
<link href="assets/css/heroic-features.css" rel="stylesheet">

</head>

<body>

	<!-- Navigation -->
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
		<div class="container">
			<a class="navbar-brand" href="#">Display Cards</a>


			<div class="btn-group">
				<a href="#" class="btn btn-primary btn-lg"
					onclick="buttonDealClick()">Deal</a> <a href="#"
					class="btn btn-primary btn-lg" onclick="buttonResetClick()">Reset</a><a href="#"
					class="btn btn-primary btn-lg" onclick="buttonShuffleClick()">Shuffle</a>
			</div>

			<button class="navbar-toggler" type="button" data-toggle="collapse"
				data-target="#navbarResponsive" aria-controls="navbarResponsive"
				aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarResponsive">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item active"><a class="nav-link"
						href="index.jsp">JSON View </a></li>
					<li class="nav-item"><a class="nav-link" href="card.jsp">Card
							View<span class="sr-only">(current)</span>
					</a></li>
				</ul>
			</div>
		</div>
	</nav>

<body>
	<div ID="cardList" div class="row">
		
	</div>
</body>



<!-- Bootstrap core JavaScript -->
<script src="assets/vendor/jquery/jquery.min.js"></script>
<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="assets/js/scriptsFinal.js"></script>
</body>


</html>