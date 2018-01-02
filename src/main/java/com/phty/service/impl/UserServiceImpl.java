package com.phty.service.impl;


import com.phty.entity.User;
import com.phty.mapper.UserMapper;
import com.phty.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public User queryNamePass(User param) {
        return userMapper.queryNamePass(param);
    }

}
