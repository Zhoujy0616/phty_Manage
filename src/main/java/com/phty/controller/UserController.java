package com.phty.controller;

import com.phty.entity.User;
import com.phty.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;

@Controller
@RequestMapping("/login")
public class UserController {

    @Resource
    private UserService userService;

    /**
     * 跳转到登录页面
     *
     * @return
     */
    @RequestMapping("/toLogin")
    public String toLogin() {
        return "login";
    }

    /**
     * 登录
     */
    @RequestMapping("/queryNamePass")
    public String queryNamePass(User param, Model model) {
        User user = userService.queryNamePass(param);
        // 判断用户名和密码是否正确，若正确，跳转到列表页面，不正确，重新登录

        if (user != null && null != "") {
            return "success";
        } else {
            return "forward:toLogin";
        }
    }


}
