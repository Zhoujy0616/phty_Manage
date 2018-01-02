<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>My JSP 'userList.jsp' starting page</title>
  </head>
  
  <body>
  <h2>列表展示</h2>
   <table border="1px;">
   	<tr>
   		<td>序号</td>
   		<td>人员名称</td>
   		<td>人员编号</td>
   		<td>所属部门</td>
   		<td>操作</td>
   	</tr>
   	<c:forEach items="${queryList}" var="l">
   		<tr>
   			<td>${l.uid }</td>
   			<td>${l.uname }</td>
   			<td>${l.dept.dno }</td>
   			<td>${l.dept.dname }</td>
   			<td>
				<a href="${pageContext.request.contextPath}/login/deleteUser?id=${l.uid}">删除</a>
			</td>
   		</tr>
   	</c:forEach>
   </table>
  </body>
</html>
