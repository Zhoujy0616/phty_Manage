package com.phty.entity;/**
 * Created by admin on 2018/1/6.
 */

/**
 * 方法说明: 菜单表
 *
 * @author Zhoujy
 * @create 201-06 20:02
 **/
public class Menu {
    private Integer menuId; //  '菜单Id',
    private String menuName; // '菜单名称',
    private String link; // '路径',
    private Integer prioirty; // '优先级',
    private Integer parentId; // '父Id',

    public Integer getMenuId() {
        return menuId;
    }

    public void setMenuId(Integer menuId) {
        this.menuId = menuId;
    }

    public String getMenuName() {
        return menuName;
    }

    public void setMenuName(String menuName) {
        this.menuName = menuName;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public Integer getPrioirty() {
        return prioirty;
    }

    public void setPrioirty(Integer prioirty) {
        this.prioirty = prioirty;
    }

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }
}
