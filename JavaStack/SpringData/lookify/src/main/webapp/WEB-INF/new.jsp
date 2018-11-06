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

        <title>Add Song</title>
    </head>
    <body>
        <div class="container">
            <hr class="my-4">
            <div class="row">
                <div class="col-4"></div>
                <div class="col-6"></div>
                <div class="col-1"><a href="/dashboard">Dashboard</a></div>
            </div>
            <hr class="my-4">
            <form:form action="/dashboard" method="post" modelAttribute="song">
                <table class="table table-dark">
                    <tbody>
                        <tr>
                            <th scope="col"><form:label for="titleField" path="title">Title</form:label></th>
                            <td><form:errors path="title"/></td>
                            <td><form:input type="text" class="form-control" id="titleField" path="title" placeholder="Title"/></td>
                        </tr>
                        <tr>
                            <th scope="col"><form:label for="artistField" path="artist">Artist</form:label></th>
                            <td><form:errors path="artist"/></td>
                            <td><form:input type="text" class="form-control" id="artistField" path="artist" placeholder="Artist"/></td>
                        </tr>
                        <tr>
                            <th scope="col"><form:label for="ratingField" path="rating">Rating</form:label></th>
                            <td><form:errors path="rating"/></td>
                            <td><form:input type="number" class="form-control" id="ratingField" path="rating" value="0" placeholder="Rating"/></td>
                        </tr>
                        <tr>
                            <td><button type="submit" class="btn btn-primary">Add Song</button></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </form:form>
        </div>
    </body>
</html>

