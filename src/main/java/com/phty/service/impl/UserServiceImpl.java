package com.phty.service.impl;


import com.phty.entity.User;
import com.phty.mapper.UserMapper;
import com.phty.service.UserService;
import com.phty.vo.ActiveUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public User queryNamePass(User param) {
        User user = userMapper.queryNamePass(param);

        // 验证用户密码是否正确　
        if (user == null || user.equals("")) {
            return user;
        }

        // 登录成功进行受权

        // 把登录信息存放到session
        ActiveUser activeUser = new ActiveUser();
        activeUser.setUserid(user.getUserId());
        activeUser.setStaffId(user.getStaffId());
        activeUser.setUserName(user.getUserName());
        return user;

    }

}
