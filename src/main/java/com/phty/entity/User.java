package com.phty.entity;

import com.phty.vo.ActiveUser;

import java.util.Date;

/**
 * 用户实体类t_user
 */
public class User extends ActiveUser {

    private Integer userId;// '用户Id',
    private String userName;//  '用户姓名',
    private String staffId;// '工号',
    private String password;// '密码',
    private Integer isVal;// '是否在职 1在职  0离职',
    private Date createTime;
    private Date updateTime;

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getStaffId() {
        return staffId;
    }

    public void setStaffId(String staffId) {
        this.staffId = staffId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getIsVal() {
        return isVal;
    }

    public void setIsVal(Integer isVal) {
        this.isVal = isVal;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }
}
