package com.be.controller;

import com.be.dto.OrderDto;
import com.be.model.AppUser;
import com.be.model.Orders;
import com.be.service.IAppUserService;
import com.be.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.List;

@RestController
@RequestMapping("/order")
@CrossOrigin("*")
public class OrderRestController {
    @Autowired
    private IOrderService orderService;
    @Autowired
    private IAppUserService appUserService;

    @GetMapping("/get/{idUser}")
    public ResponseEntity<Orders> getOrderByUserId(@PathVariable Long idUser) {
        Orders order = orderService.findOrderByUserId(idUser);
        return new ResponseEntity<>(order, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createOrderByUser(@RequestBody OrderDto orderDto) {
        try {
            AppUser appUser = appUserService.findAppUserById(orderDto.getIdUser());
            Orders orders = new Orders();
            orders.setAppUser(appUser);
            orders.setPaid(false);
            this.orderService.createOrder(orders);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PatchMapping("/update")
    public ResponseEntity updateOrder(@RequestBody OrderDto orderDto) {
        try {
            Orders orders = orderService.findOrderById(orderDto.getId());
            Timestamp timestamp = new Timestamp(System.currentTimeMillis());
            orders.setPaid(true);
            orders.setDatePurchase(timestamp);
            this.orderService.updateOrder(orders);
            return new ResponseEntity(HttpStatus.OK);
        }catch (Exception ex){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }
}
