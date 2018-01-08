package com.phty.entity;/**
 * Created by admin on 2018/1/6.
 */

/**
 * 方法说明: 角色菜单关联表
 *
 * @author Zhoujy
 * @create 201-06 20:15
 **/
public class RoleMenuMappering {
    private Integer rumId;
    private Integer menuId;
    private Integer roleId;

    public Integer getRumId() {
        return rumId;
    }

    public void setRumId(Integer rumId) {
        this.rumId = rumId;
    }

    public Integer getMenuId() {
        return menuId;
    }

    public void setMenuId(Integer menuId) {
        this.menuId = menuId;
    }

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }
}
