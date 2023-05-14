package com.be.repository;

import com.be.model.OrderDetail;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Transactional
public interface IOrderDetailRepository extends JpaRepository<OrderDetail,Long> {
    List<OrderDetail>findOrderDetailsByOrder_Id(Long idOrder);
    OrderDetail findOrderDetailByOrder_IdAndProduct_Id(Long idOrder, Long idProduct);
    @Query(nativeQuery = true, value = " select `order_detail`.* from `order_detail` " +
            " join `orders`  on `orders`.id=`order_detail`.order_id\n " +
            " join `app_user` on `orders`.app_user_id=`app_user`.id\n " +
            " where `app_user`.id= :idUser and `orders`.is_paid=true ")
    Page<OrderDetail>findHistory(@Param("idUser") Long idUser, Pageable pageable);

}
