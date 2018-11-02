<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" import="com.codingdojo.pets.models.Cat" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>	
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Cat</title>
	</head>
	<body>
		<% Cat cat = (Cat) request.getAttribute("cat"); %>
		<h2>You created a <c:out value="${cat.getBreed()}"/>.</h2>
		<h2><c:out value="${cat.showAffection()}"/></h2>
	</body>
</html>