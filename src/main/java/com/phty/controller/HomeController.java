package com.phty.controller;/**
 * Created by admin on 2018/1/8.
 */

import com.phty.entity.Menu;
import com.phty.entity.User;
import com.phty.mapper.UserMapper;
import com.phty.utils.WebConstants;
import com.phty.vo.ActiveUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * 方法说明:
 *
 * @author Zhoujy
 * @create 2018-01-08 18:19
 **/
@Controller
@RequestMapping("/home")
public class HomeController {
    @Autowired
    private UserMapper userMapper;
    // 首页
    @RequestMapping("/index.do")
    public String index(HttpServletRequest request, HttpSession session, Model model) {
        return "home/index";
    }

    @RequestMapping("/top.do")
    public String top(HttpServletRequest request, HttpSession session, Model model) {
        return "home/top";
    }

    @RequestMapping("/left.do")
    public String left(HttpServletRequest request, HttpSession session, Model model) {
        ActiveUser activeUser = (ActiveUser) request.getSession().getAttribute(WebConstants.ACTIVE_USER);
        Integer userid = ((User) activeUser).getUserId();
        //获取用户角色信息
        Integer roleId= userMapper.findUserRoleId(userid);
        //获取用户权限范围菜单
        List<Menu> menus = userMapper.findMenuByUserId(roleId);
        model.addAttribute("menu",menus);
        return "home/left";
    }

    @RequestMapping("/main.do")
    public String main(HttpServletRequest request, HttpSession session, Model model) {
        return "home/main";
    }


}
