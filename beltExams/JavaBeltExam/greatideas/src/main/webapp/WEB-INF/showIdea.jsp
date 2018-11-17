<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>


<!doctype html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
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


        <title>Ideas</title>
    </head>
    <body>
        <div class="container">
            <div class="jumbotron bg-dark text-light">
                <div class="row">
                    <div class="col-8">
                        <h2>${idea.idea}</h2>
                    </div>
                    <div class="col">
                        <a href="/ideas" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Go Back</a>
                    </div>
                    <div class="col">
                        <a href="/logout" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Logout</a>
                    </div>
                </div>
                <div class="row ml-3 mt-3">
                    <h5>Created By: ${idea.user.first_name} ${idea.user.last_name}</h5>
                </div>
            </div>
            <h3>Users who liked your idea:</h3>
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                    <c:forEach items="${users}" var="u">
                        <tr>
                            <td>${u[0]} ${u[1]}</td>
                        </tr>
                    </c:forEach>
                </tbody>
            </table>
            <a href="/ideas/${idea.id}/edit" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Edit</a>
        </div>
    </body>
</html>