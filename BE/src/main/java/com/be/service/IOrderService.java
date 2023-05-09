package com.be.service;

import com.be.model.Orders;
import org.springframework.stereotype.Service;

import java.util.List;


public interface IOrderService {
    List<Orders> findOrderByUserId(Long idUser);
}
