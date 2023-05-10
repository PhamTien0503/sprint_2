package com.be.service.impl;

import com.be.model.OrderDetail;
import com.be.repository.IOrderDetailRepository;
import com.be.service.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailService implements IOrderDetailService {
    @Autowired
    private IOrderDetailRepository orderDetailRepository;

    @Override
    public void saveOrderDetail(OrderDetail orderDetail) {
        List<OrderDetail>orderDetailList=findAllOrderDetailByIdOrder(orderDetail.getOrder().getId());
        for (OrderDetail od:orderDetailList) {
            if (od.getProduct().getId()==orderDetail.getProduct().getId()){
                od.setOrderQuantity(od.getOrderQuantity()+orderDetail.getOrderQuantity());
                orderDetailRepository.save(od);
                return;
            }
        }
        orderDetailRepository.save(orderDetail);
    }

    @Override
    public OrderDetail updateOrderDetail(OrderDetail orderDetail) {
        return orderDetailRepository.save(orderDetail);
    }

    @Override
    public List<OrderDetail> findAllOrderDetailByIdOrder(Long idOrder) {
        return orderDetailRepository.findOrderDetailsByOrder_Id(idOrder);
    }

    @Override
    public OrderDetail findOrderDetailByOrder_IdAndProduct_Id(Long idOrder, Long idProduct) {
        return orderDetailRepository.findOrderDetailByOrder_IdAndProduct_Id(idOrder,idProduct);
    }

    @Override
    public OrderDetail findOrderDetailById(Long id) {
        return orderDetailRepository.findById(id).get();
    }
}
