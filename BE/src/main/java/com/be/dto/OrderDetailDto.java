package com.be.dto;

import com.be.model.Orders;
import com.be.model.Product;

import javax.persistence.*;

public class OrderDetailDto {
    private Long id;
    private Integer orderQuantity;
    private Orders order;
    private Product product;

    public OrderDetailDto() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getOrderQuantity() {
        return orderQuantity;
    }

    public void setOrderQuantity(Integer orderQuantity) {
        this.orderQuantity = orderQuantity;
    }

    public Orders getOrder() {
        return order;
    }

    public void setOrder(Orders order) {
        this.order = order;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
