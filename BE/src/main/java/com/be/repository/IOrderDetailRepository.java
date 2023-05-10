package com.be.repository;

import com.be.model.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IOrderDetailRepository extends JpaRepository<OrderDetail,Long> {
    List<OrderDetail>findOrderDetailsByOrder_Id(Long idOrder);
    OrderDetail findOrderDetailByOrder_IdAndProduct_Id(Long idOrder, Long idProduct);
}
