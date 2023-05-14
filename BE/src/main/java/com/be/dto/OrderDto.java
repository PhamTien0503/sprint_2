package com.be.dto;

import java.sql.Timestamp;

public class OrderDto {
    private Long id;
    private Timestamp datePurchase;
    private Boolean isPaid;
    private Long idUser;

    public OrderDto() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Timestamp getDatePurchase() {
        return datePurchase;
    }

    public void setDatePurchase(Timestamp datePurchase) {
        this.datePurchase = datePurchase;
    }

    public Boolean getPaid() {
        return isPaid;
    }

    public void setPaid(Boolean paid) {
        isPaid = paid;
    }

    public Long getIdUser() {
        return idUser;
    }

    public void setIdUser(Long idUser) {
        this.idUser = idUser;
    }
}
