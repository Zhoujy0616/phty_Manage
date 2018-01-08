package com.phty.vo;


import com.phty.entity.Menu;

import java.io.Serializable;
import java.util.List;

/**
 *
 */
public class ActiveUser implements Serializable {

    private Integer userid;//用户id（主键）
    private String staffId; // 工号
    private String userName;// 用户名称
    private List<Menu> menus;// 菜单
    private List<Menu> permissions;// 权限

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public String getStaffId() {
        return staffId;
    }

    public void setStaffId(String staffId) {
        this.staffId = staffId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public List<Menu> getMenus() {
        return menus;
    }

    public void setMenus(List<Menu> menus) {
        this.menus = menus;
    }

    public List<Menu> getPermissions() {
        return permissions;
    }

    public void setPermissions(List<Menu> permissions) {
        this.permissions = permissions;
    }
}
