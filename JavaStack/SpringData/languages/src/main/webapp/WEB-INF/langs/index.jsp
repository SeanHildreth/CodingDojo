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

        <title>Languages</title>
    </head>
    <body>
        <div class="container">
            <hr class="my-4">
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Creator</th>
                        <th scope="col">Version</th>
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>
                    <c:forEach items="${langs}" var="lang">
                        <tr>
                            <td><a href="/langs/${lang.id}"><c:out value="${lang.name}" /></a></td>
                            <td><c:out value="${lang.creator}" /></td>
                            <td><c:out value="${lang.version}" /></td>
                            <td>
                                <form action="/langs/${lang.id}" method="post" class="d-inline-block">
                                    <input type="hidden" name="_method" value="delete">
                                    <input type="submit" value="delete" class="btn btn-link d-inline-block">
                                </form>
                                <a href="/langs/${lang.id}/edit">edit</a>
                            </td>
                        </tr>
                    </c:forEach>
                </tbody>
            </table>
            <form:form action="/langs" method="post" modelAttribute="lang">
                <div class="form-group">
                    <form:label for="nameField" path="name">Name</form:label>
                    <form:errors path="name"/>
                    <form:input type="text" class="form-control" id="nameField" path="name" placeholder="Name"/>
                </div>
                <div class="form-group">
                    <form:label for="creatorField" path="creator">Creator</form:label>
                    <form:errors path="creator"/>
                    <form:input type="text" class="form-control" id="creatorField" path="creator" placeholder="Creator"/>
                </div>
                <div class="form-group">
                    <form:label for="versionField" path="version">Version</form:label>
                    <form:errors path="version"/>
                    <form:input type="text" class="form-control" id="versionField" path="version" placeholder="Version"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form:form>
        </div>
    </body>
</html>
