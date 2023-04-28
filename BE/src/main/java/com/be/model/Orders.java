package com.be.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String datePurchase;
    private Boolean id_paid;
    @ManyToOne
    @JoinColumn(name = "app_user_id",referencedColumnName = "id")
    private AppUser appUser;
    @OneToMany(mappedBy = "order")
    @JsonBackReference
    private Set<OrderDetail> orderDetailSet;


    public Orders() {
    }


    public Set<OrderDetail> getOrderDetailSet() {
        return orderDetailSet;
    }

    public void setOrderDetailSet(Set<OrderDetail> orderDetailSet) {
        this.orderDetailSet = orderDetailSet;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDatePurchase() {
        return datePurchase;
    }

    public void setDatePurchase(String datePurchase) {
        this.datePurchase = datePurchase;
    }

    public Boolean getId_paid() {
        return id_paid;
    }

    public void setId_paid(Boolean id_paid) {
        this.id_paid = id_paid;
    }

    public AppUser getAppUser() {
        return appUser;
    }

    public void setAppUser(AppUser appUser) {
        this.appUser = appUser;
    }
}
