package com.phty.controller;

import com.phty.entity.User;
import com.phty.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    @RequestMapping("toLogin")
    public String toLogin() {
        return "login";
    }

    /**
     * 校验用户名是否重复
     */
    @RequestMapping("checkName")
    @ResponseBody
    public Map<String, Object> checkName(User param){
        Map<String, Object> map = new HashMap<String, Object>();
        User result = userService.queryUserName(param);
        //  判断用户名是否存在，若存在，提示可以登录，若不存在，提示去注册
        if (result != null) {
            map.put("msg", "用户名已经存在");
        } else {
            map.put("msg", "用户名不存在");
        }
        return map;
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

    /**
     * 查询用户信息
     */
    @RequestMapping("/queryUserList")
    public String queryUserList(User param, Model model) {
        List<User> userList = userService.queryUserList(param);
        // 将查询出来的数据传到前台页面
        model.addAttribute("queryList", userList);
        return "userList";
    }

    /**
     * 删除用户信息
     */
    @RequestMapping("/deleteUser")
    public String deleteUser(Integer id) {
        userService.deleteUser(id);
        return "redirect:queryUserList";
    }


}
