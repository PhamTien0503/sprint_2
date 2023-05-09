package com.be.service.impl;

import com.be.model.Orders;
import com.be.repository.IOrderRepository;
import com.be.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private IOrderRepository orderRepository;
    @Override
    public List<Orders> findOrderByUserId(Long idUser) {
        return orderRepository.findOrdersByAppUserId(idUser);
    }
}
