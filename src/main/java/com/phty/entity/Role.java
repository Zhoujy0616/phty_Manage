package com.phty.entity;

import java.io.Serializable;

/**
 * 角色t_role
 */
public class Role implements Serializable{

    private Integer roleid;
    private String roleName;

    public Integer getRoleid() {
        return roleid;
    }

    public void setRoleid(Integer roleid) {
        this.roleid = roleid;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }
}
