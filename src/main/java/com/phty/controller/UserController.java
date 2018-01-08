package com.phty.controller;

import com.phty.entity.User;
import com.phty.service.UserService;
import com.phty.utils.WebConstants;
import com.phty.vo.ActiveUser;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/user")
public class UserController {

    @Resource
    private UserService userService;

    @RequestMapping("/toLogin.do")
    public String toLogin(){
        return "user/login";
    }
    /**
     * 登录
     */
    @RequestMapping("/login")
    public String login(User param, Model model,HttpSession session) {
        User user = userService.queryNamePass(param);
        // 判断用户名和密码是否正确，若正确，跳转到列表页面，不正确，重新登录

        if (user == null) {
            model.addAttribute("msg","用户名或密码错误");
            return "user/login";
        } else {
            // 登录成功
            ActiveUser users = user;
            session.setAttribute(WebConstants.ACTIVE_USER, users);
            return "redirect:/home/index.do";
        }
    }


}
