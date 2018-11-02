<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" import="com.codingdojo.pets.models.Dog" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Dog</title>
	</head>
	<body>
		<% Dog dog = (Dog) request.getAttribute("dog"); %>
		<h2>You created a <c:out value="${dog.getBreed()}"/>.</h2>
		<h2> <c:out value="${dog.showAffection()}"/> </h2>
	</body>
</html>