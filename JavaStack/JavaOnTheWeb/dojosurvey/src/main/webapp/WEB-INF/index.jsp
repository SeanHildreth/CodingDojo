<%@ page language="java" contentType="text/html" pageEncoding="UTF-8" %>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>

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

        <title>Surveys</title>
    </head>
    <body>
        <div class="container">
            <hr class="my-4" style="visibility:hidden">
            <hr class="my-4" style="visibility:hidden">
            <hr class="my-4" style="visibility:hidden">
            <div class="jumbotron bg-info text-white text-center">
                <h1 class="display-5">Dojo Survey</h1>
                <hr class="my-4">
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-6">
                        <form action="/process" method="POST">
                            <div class="input-group mb-3 input-group-lg">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Name:</span>
                                </div>
                                <input type="text" class="form-control" name="name" placeholder="Name">
                            </div>
                            <div class="input-group mb-3 input-group-lg">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Dojo Location:</span>
                                </div>
                                <select type="text" name="dojo" class="form-control">
                                    <c:forEach var="dojo" items="${sessionScope['dojos']}">
                                        <option value='<c:out value="${dojo}" />'><c:out value="${dojo}" /></option>
                                    </c:forEach>
                                </select>
                            </div>
                            <div class="input-group mb-3 input-group-lg">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Favorite Language:</span>
                                </div>
                                <select type="text" name="lang" class="form-control">
                                    <c:forEach var="lang" items="${sessionScope['langs']}">
                                        <option value='<c:out value="${lang}" />'><c:out value="${lang}" /></option>
                                    </c:forEach>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="textarea">Comment (Optional)</label>
                                <textarea class="form-control" name="comment" id="textarea" rows="3" maxlength="255"></textarea>
                            </div>
                            <button type="submit" class="btn btn-success btn-lg btn-block">Submit</button>
                        </form>
                    </div>
                    <div class="col-3"></div>
                </div>
            </div>
        </div>
    </body>
</html>