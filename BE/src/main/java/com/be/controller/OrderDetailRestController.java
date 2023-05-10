package com.be.controller;

import com.be.dto.CartDto;
import com.be.model.OrderDetail;
import com.be.model.Orders;
import com.be.model.Product;
import com.be.service.IOrderDetailService;
import com.be.service.IOrderService;
import com.be.service.IProductService;
import javafx.scene.chart.ScatterChart;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("*")
@RequestMapping("/cart")
public class OrderDetailRestController {
    @Autowired
    private IOrderDetailService orderDetailService;
    @Autowired
    private IProductService productService;
    @Autowired
    private IOrderService orderService;

    @PostMapping("/create")
    public ResponseEntity<?> createOrderDetail(@RequestBody CartDto cartDto) {
        Orders orders = orderService.findOrderById(cartDto.getOrderId());
        Product product = productService.findProductById(cartDto.getProductId());
        OrderDetail orderDetail = new OrderDetail();
        orderDetail.setOrderQuantity(cartDto.getOrderQuantity());
        orderDetail.setOrder(orders);
        orderDetail.setProduct(product);
        orderDetailService.saveOrderDetail(orderDetail);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/list/{idOrder}")
    public ResponseEntity<List<OrderDetail>> getAllOrderDetailByOrderId(@PathVariable Long idOrder) {
        try {
            List<OrderDetail> orderDetailList = orderDetailService.findAllOrderDetailByIdOrder(idOrder);
            return new ResponseEntity<>(orderDetailList, HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping("/find-by-order-product/{idOrder}/{idProduct}")
    public ResponseEntity<OrderDetail> getOrderDetailByOrderAndProduct(@PathVariable Long idOrder,
                                                                       @PathVariable Long idProduct){
        OrderDetail orderDetail=orderDetailService.findOrderDetailByOrder_IdAndProduct_Id(idOrder,idProduct);
        return new ResponseEntity<>(orderDetail,HttpStatus.OK);
    }
    @PatchMapping("/update")
    public ResponseEntity<OrderDetail>updateOrderDetailById(@RequestBody  CartDto cartDto){
     OrderDetail orderDetail=orderDetailService.findOrderDetailById(cartDto.getId());
     if (orderDetail==null){
         return new ResponseEntity<>(HttpStatus.NO_CONTENT);
     }
     try {
         orderDetail.setOrderQuantity(cartDto.getOrderQuantity());
         orderDetail.setChoose(cartDto.isChoose());
         this.orderDetailService.updateOrderDetail(orderDetail);
         return new ResponseEntity<>(HttpStatus.OK);
     }catch (Exception ex){
         return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
     }
    }
}
