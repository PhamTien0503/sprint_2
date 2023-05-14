package com.be.service;

import com.be.model.Orders;
import org.springframework.stereotype.Service;

import java.util.List;


public interface IOrderService {
    Orders findOrderByUserId(Long idUser);
    Orders findOrderById(Long idOrder);
    void createOrder(Orders orders);
    void  updateOrder(Orders orders);
}
