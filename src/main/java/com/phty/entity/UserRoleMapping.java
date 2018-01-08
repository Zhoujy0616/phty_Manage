package com.phty.entity;/**
 * Created by admin on 2018/1/6.
 */

/**
 * 方法说明: 用戶角色关联表
 *
 * @author Zhoujy
 * @create 2018-01-06 20:00
 **/
public class UserRoleMapping {
    private Integer urmId;//
    private Integer userId;//
    private Integer roleId;//

    public Integer getUrmId() {
        return urmId;
    }

    public void setUrmId(Integer urmId) {
        this.urmId = urmId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }
}
