package com.phty.service;

import com.phty.entity.User;

import java.util.List;

public interface UserService {

	User queryUserName(User param);

	User queryNamePass(User param);

	List<User> queryUserList(User param);

	void deleteUser(Integer id);

}
