package com.phty.interceptor;/**
 * Created by admin on 2017/12/29.
 */


import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 方法说明: 登录拦截器
 *
 * @author Zhoujy
 * @create 2017-12-29 17:51
 **/
public class LoginInterceptor implements HandlerInterceptor {

    // 在调用Controller中的请求处理方法之前进行执行
    @Override
    public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o) throws Exception {



        return false;
    }
    // 在调用Controller中的请求处理方法之后进行执行
    @Override
    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {

    }
    // 在调用Controller中的视图完成之后进行执行
    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {

    }
}
