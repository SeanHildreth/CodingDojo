<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
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

        <title>Books Home</title>
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-5">
                </div>
                <div class="col-5">
                </div>
                <div class="col">
                    <a href="/langs">Dashboard</a>
                </div>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item ml-3"><c:out value="${lang.name}" /></li>
                <li class="list-group-item ml-3"><c:out value="${lang.creator}" /></li>
                <li class="list-group-item ml-3"><c:out value="${lang.version}" /></li>
                <li class="list-group-item ml-3"><a href="/langs/${lang.id}/edit">Edit</a></li>
                <li class="list-group-item"><form action="/langs/${lang.id}" method="post" class="d-inline-block">
                    <input type="hidden" name="_method" value="delete">
                    <input type="submit" value="Delete" class="btn btn-link d-inline-block">
                </form></li>
            </ul>
        </div>
    </body>
</html>