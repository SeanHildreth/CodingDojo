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
                        <h2 class="display-4">Create a New Idea</h2>
                    </div>
                    <div class="col mt-2">
                        <a href="/ideas" class="btn btn-secondary btn-lg active mt-2" role="button" aria-pressed="true">Go Back</a>
                    </div>
                    <div class="col mt-2">
                        <a href="/logout" class="btn btn-secondary btn-lg active mt-2" role="button" aria-pressed="true">Logout</a>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col">
                        <form:form action="/createIdea" method="post" modelAttribute="newIdea">
                            <form:label path="idea">Content:</form:label>
                            <form:input type="text" class="form-control d-inline-block" path="idea" placeholder="Idea" minlength="1"/>
                            <form:errors path="idea" />
                            <form:hidden path="user" value="${user.id}" />
                            <button type="submit" class="btn btn-secondary btn-block mt-2">Create</button>
                        </form:form>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>