# phty_Manage
/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50067
Source Host           : 127.0.0.1:3306
Source Database       : phty

Target Server Type    : MYSQL
Target Server Version : 50067
File Encoding         : 65001

Date: 2018-01-10 12:59:10
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for business
-- ----------------------------
DROP TABLE IF EXISTS `business`;
CREATE TABLE `business` (
  `bId` int(11) NOT NULL COMMENT '商户Id',
  `bName` varchar(255) collate utf8_bin default NULL COMMENT '商户名',
  `address` varchar(255) collate utf8_bin default NULL COMMENT '地址',
  `contactName` varchar(255) collate utf8_bin default NULL COMMENT '联系人名字',
  `contactTel` varchar(255) collate utf8_bin default NULL COMMENT '联系电话',
  `staffId` int(11) default NULL COMMENT '关联员工工号',
  `expireTime` datetime default NULL COMMENT '到期时间',
  `num` int(11) default NULL COMMENT '坐席人数',
  `info` varchar(255) collate utf8_bin default NULL COMMENT '服务器信息',
  `key` varchar(255) collate utf8_bin default NULL COMMENT '创建商户时生成的唯一key',
  `pub_key` varchar(255) collate utf8_bin default NULL COMMENT '包含所有购买信息的公钥',
  `createtime` datetime default NULL,
  `updatetime` datetime default NULL,
  PRIMARY KEY  (`bId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='商户表';

-- ----------------------------
-- Records of business
-- ----------------------------

-- ----------------------------
-- Table structure for menu
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu` (
  `menuId` int(11) NOT NULL COMMENT '菜单Id',
  `menuName` varchar(255) collate utf8_bin default NULL COMMENT '菜单名称',
  `link` varchar(255) collate utf8_bin default NULL COMMENT '路径',
  `prioirty` int(11) default NULL COMMENT '优先级',
  `parentId` int(11) default NULL COMMENT '父Id',
  PRIMARY KEY  (`menuId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='菜单表';

-- ----------------------------
-- Records of menu
-- ----------------------------
INSERT INTO `menu` VALUES ('1', '根目录', null, '0', '-1');
INSERT INTO `menu` VALUES ('2', '账户管理', '', '1', '1');
INSERT INTO `menu` VALUES ('3', '商户管理', null, '2', '1');
INSERT INTO `menu` VALUES ('4', '添加账户', '/user/add.do', '1', '2');
INSERT INTO `menu` VALUES ('5', '添加商户', '/bussess/add.do', '1', '3');
INSERT INTO `menu` VALUES ('6', '商户列表', '/bussess/list.do', '2', '3');

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `roleId` int(11) NOT NULL COMMENT '角色Id',
  `roleName` varchar(255) collate utf8_bin default NULL COMMENT '角色名',
  PRIMARY KEY  (`roleId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='角色表';

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', '管理员');
INSERT INTO `role` VALUES ('2', '客服');

-- ----------------------------
-- Table structure for role_menu_mapping
-- ----------------------------
DROP TABLE IF EXISTS `role_menu_mapping`;
CREATE TABLE `role_menu_mapping` (
  `rumId` int(11) NOT NULL,
  `menuId` int(11) default NULL,
  `roleId` int(11) default NULL,
  PRIMARY KEY  (`rumId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='角色功能关联表';

-- ----------------------------
-- Records of role_menu_mapping
-- ----------------------------
INSERT INTO `role_menu_mapping` VALUES ('1', '1', '1');
INSERT INTO `role_menu_mapping` VALUES ('2', '2', '1');
INSERT INTO `role_menu_mapping` VALUES ('3', '3', '1');
INSERT INTO `role_menu_mapping` VALUES ('4', '3', '2');
INSERT INTO `role_menu_mapping` VALUES ('5', '6', '2');
INSERT INTO `role_menu_mapping` VALUES ('6', '4', '1');
INSERT INTO `role_menu_mapping` VALUES ('7', '5', '1');
INSERT INTO `role_menu_mapping` VALUES ('8', '6', '1');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `userId` int(11) NOT NULL COMMENT '用户Id',
  `userName` varchar(255) collate utf8_bin default NULL COMMENT '用户姓名',
  `staffId` varchar(255) collate utf8_bin default NULL COMMENT '工号',
  `password` varchar(255) collate utf8_bin default NULL COMMENT '密码',
  `is_val` int(255) default NULL COMMENT '是否在职 1在职  0离职',
  `createtime` datetime default NULL,
  `updatetime` datetime default NULL,
  PRIMARY KEY  (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='用户表';

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'admin', 'admin', 'admin123456', '1', '2018-01-06 15:01:44', null);
INSERT INTO `users` VALUES ('2', 'test1', '10001', 'test123456', '1', '2018-01-06 15:04:37', null);

-- ----------------------------
-- Table structure for user_role_mapping
-- ----------------------------
DROP TABLE IF EXISTS `user_role_mapping`;
CREATE TABLE `user_role_mapping` (
  `urmId` int(11) NOT NULL,
  `userId` int(11) default NULL,
  `roleId` int(11) default NULL,
  PRIMARY KEY  (`urmId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='用户角色关联表';

-- ----------------------------
-- Records of user_role_mapping
-- ----------------------------
INSERT INTO `user_role_mapping` VALUES ('1', '1', '1');
INSERT INTO `user_role_mapping` VALUES ('2', '2', '2');
