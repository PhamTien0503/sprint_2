package com.be.repository;

import com.be.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IOrderRepository extends JpaRepository<Orders, Long> {
   List<Orders> findOrdersByAppUserId(Long idUser);
}
