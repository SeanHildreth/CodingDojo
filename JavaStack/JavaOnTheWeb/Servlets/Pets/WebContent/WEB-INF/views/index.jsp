<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<!-- Required meta tags -->
		<meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://canvasjs.com/assets/script/jquery-1.11.1.min.js"></script>
        <script src="https://canvasjs.com/assets/script/jquery.canvasjs.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
		<title>Make a Pet</title>
	</head>
	<body>
		<div class="container">
            <h1>Make A Pet</h1>
            <div class="row">
                <table class="table table-borderless table-dark">
                    <thead>
                        <tr>
                            <td>
								<form action="/Pets/Dogs" method="POST">
									<h4>Make a Dog!</h4>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">Name:</span>
                                        </div>
                                        <input type="text" class="form-control" name="name" placeholder="Name">
                                    </div>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">Breed:</span>
                                        </div>
                                        <input type="text" class="form-control" name="breed" placeholder="Breed">
                                    </div>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">Weight:</span>
                                        </div>
                                        <input type="number" class="form-control" name="weight">
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>
                                </form>
                            </td>
                            <td>
								<form action="/Pets/Cats" method="POST">
									<h4>Make a Cat!</h4>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">Name:</span>
                                        </div>
                                        <input type="text" class="form-control" name="name" placeholder="Name">
                                    </div>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">Breed:</span>
                                        </div>
                                        <input type="text" class="form-control" name="breed" placeholder="Breed">
                                    </div>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">Weight:</span>
                                        </div>
                                        <input type="number" class="form-control" name="weight">
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>
                                </form>
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
	</body>
</html>