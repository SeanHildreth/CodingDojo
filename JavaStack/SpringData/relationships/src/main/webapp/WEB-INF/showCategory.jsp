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

        <title>Category Page</title>
    </head>
    <body>
        <div class="container">
            <hr class="my-4">
            <h1>${category.name}</h1>
            <hr class="my-4">
            <table class="table table-dark">
                <tbody>
                    <tr>
                        <th><h3>Categories:</h3></th>
                    </tr>
                    <c:forEach items="${categoryProducts}" var="product">
                        <tr>
                            <td><h5>${product.name}</h5></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </c:forEach>
                    <tr>
                        <form action="/addProduct/${category.id}" method="post">
                            <th scope="col"><label>Add Product:</label></th>
                            <td><select name="product">
                                <c:forEach items="${products}" var="product">
                                    <option value="${product.id}">${product.name}</option>
                                </c:forEach>
                            </select></td>
                            <td><button type="submit" class="btn btn-primary">Add</button></td>
                        </form>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
</html>



