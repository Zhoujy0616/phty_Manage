package com.phty.mapper;

import com.phty.entity.Menu;
import com.phty.entity.User;

import java.util.List;

public interface UserMapper {

	User queryNamePass(User param);

	Integer findUserRoleId(Integer userid);

	List<Menu> findMenuByUserId(Integer roleId);
}
