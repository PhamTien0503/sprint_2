package com.be.dto;

import com.be.model.Orders;
import com.be.model.Product;


public class CartDto {
    private Long id;
    private Integer orderQuantity;
    private Long orderId;
    private Long productId;
    private boolean choose;

    public CartDto() {
    }

    public boolean isChoose() {
        return choose;
    }

    public void setChoose(boolean choose) {
        this.choose = choose;
    }

    public Integer getOrderQuantity() {
        return orderQuantity;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setOrderQuantity(Integer orderQuantity) {
        this.orderQuantity = orderQuantity;
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }
}
