<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="EN">
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="style.css">
		<title>Checkerboard</title>
	</head>
	<body>
		<% String width = request.getParameter("width"); %>
		<% String height = request.getParameter("height"); %>
		<% if(width == null) { %>
			<% width = "2"; %>
		<% } %>
		<% if(height == null) { %>
			<% height = "2"; %>
		<% } %>
		<% Integer w = Integer.valueOf(width); %>
		<% Integer h = Integer.valueOf(height); %>
		<div class="container">
			<h1>Checkerboard: <%= w %>w X <%= h %>h</h1>
			<hr class="my-4">
			<table>
				<% for(int i = 0; i < h; i++) { %>
					<% if(i % 2 == 0) { %>
						<tr>
							<% for(int j = 0; j < w; j++) { %>
								<% if(j % 2 == 0) { %>
									<td>
										<div class="blue"></div>
									</td>
								<% } %>
								<% if(j % 2 != 0) { %>
									<td>
										<div class="purple"></div>
									</td>
								<% } %>
							<% } %>
						</tr>
					<% } %>
					<% if(i % 2 != 0) { %>
						<tr>
							<% for(int j = 0; j < w; j++) { %>
								<% if(j % 2 == 0) { %>
									<td>
										<div class="purple"></div>
									</td>
								<% } %>
								<% if(j % 2 != 0) { %>
									<td>
										<div class="blue"></div>
									</td>
								<% } %>
							<% } %>
						</tr>
					<% } %>
				<% } %>
			</table>
		</div>
	</body>
</html>