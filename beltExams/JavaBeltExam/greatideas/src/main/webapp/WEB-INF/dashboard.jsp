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
                    <div class="col-10">
                        <h1 class="display-4">Welcome, ${user.first_name} ${user.last_name}!</h1>
                    </div>
                    <div class="col mt-2">
                        <a href="/logout" class="btn btn-secondary btn-lg active mt-2" role="button" aria-pressed="true">Logout</a>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-4"><h4>Ideas</h4></div>
                    <div class="col-4"></div>
                    <div class="col-2">Low Likes</div>
                    <div class="col-2">High Likes</div>
                </div>
            </div>
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Idea</th>
                        <th scope="col">Created By:</th>
                        <th scope="col">Likes</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <c:forEach items="${ideas}" var="i">
                        <tr>
                            <th scope="row"><a href="/ideas/${i.id}">${i.idea}</a></th>
                            <td>${i.user.first_name} ${i.user.last_name}</td>
                            <td>${i.users.size()}</td>
                            <td>
                                <c:if test="${i.users.contains(user)}">
                                    <a href="/unlike/${i.id}/${user.id}">Unlike</a>
                                </c:if>
                                <c:if test="${i.users.contains(user) == false}">
                                    <a href="/like/${i.id}/${user.id}">Like</a>
                                </c:if>
                            </td>
                        </tr>
                    </c:forEach>
                </tbody>
            </table>
            <a href="/ideas/new" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Create an Idea</a>
        </div>
    </body>
</html>