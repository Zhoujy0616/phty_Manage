package com.phty.entity;

import lombok.Data;

import java.io.Serializable;

/**
 * 角色t_role
 */
@Data
public class Role implements Serializable{

    private Integer roleid;
    private String roleName;

}
