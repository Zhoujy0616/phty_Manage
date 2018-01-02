package com.phty.mapper;

import com.phty.entity.User;

import java.util.List;

public interface UserMapper {
	
	User queryUserName(User param);

	User queryNamePass(User param);
	
	List<User> queryUserList(User param);

	void deleteUser(Integer id);

	public void deleteUders(Integer id) throws Exception;
}
