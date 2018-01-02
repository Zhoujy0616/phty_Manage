package com.phty.service.impl;


import com.phty.entity.User;
import com.phty.mapper.UserMapper;
import com.phty.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
class UserServiceImpl implements UserService {

	@Autowired
	private UserMapper userMapper;
	@Override
	public User queryUserName(User param) {
		return userMapper.queryUserName(param);
	}

	@Override
	public User queryNamePass(User param) {
		return userMapper.queryNamePass(param);
	}

	@Override
	public List<User> queryUserList(User param) {
		return userMapper.queryUserList(param);
	}

	@Override
	public void deleteUser(Integer id) {
		userMapper.deleteUser(id);
	}
}
