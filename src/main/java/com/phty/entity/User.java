package com.phty.entity;

import lombok.Data;

import java.io.Serializable;

/**
 * 用户实体类t_user
 */
@Data
public class User implements Serializable {

    private Integer userid;
    private String username;
    private String password;
    private Integer roleid;

}
