package com.be.service.impl;

import com.be.model.Orders;
import com.be.repository.IOrderRepository;
import com.be.repository.IUserRepository;
import com.be.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private IOrderRepository orderRepository;
    @Autowired
    private IUserRepository userRepository;

    @Override
    public Orders findOrderByUserId(Long idUser) {
        List<Orders> ordersList = orderRepository.findOrdersByAppUserId(idUser);
        if (ordersList.isEmpty()) {
            Orders newOrder = new Orders();
            newOrder.setAppUser(userRepository.findById(idUser).get());
            newOrder.setIsPaid(false);
            orderRepository.save(newOrder);
            return newOrder;
        }
        if (Boolean.FALSE.equals(ordersList.get(ordersList.size() - 1).getIsPaid())) {
            return ordersList.get(ordersList.size() - 1);
        }
        Orders newOrder = new Orders();
        newOrder.setAppUser(userRepository.findById(idUser).get());
        newOrder.setIsPaid(false);
        orderRepository.save(newOrder);
        return newOrder;
    }

    @Override
    public Orders findOrderById(Long idOrder) {
        return orderRepository.findById(idOrder).get();
    }

    @Override
    public void createOrder(Orders orders) {
         orderRepository.save(orders);
    }

    @Override
    public void updateOrder(Orders orders) {
        this.orderRepository.save(orders);
    }
}
