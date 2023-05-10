package com.be.service;

import com.be.model.OrderDetail;

import java.util.List;

public interface IOrderDetailService {
    void saveOrderDetail(OrderDetail orderDetail);
    OrderDetail updateOrderDetail(OrderDetail orderDetail);
    List<OrderDetail>findAllOrderDetailByIdOrder(Long idOrder);
    OrderDetail findOrderDetailByOrder_IdAndProduct_Id(Long idOrder, Long idProduct);
    OrderDetail findOrderDetailById(Long id);
}
