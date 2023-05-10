package com.be.controller;

import com.be.model.Orders;
import com.be.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
@CrossOrigin("*")
public class OrderRestController {
    @Autowired
    private IOrderService orderService;
    @GetMapping("/get/{idUser}")
    public ResponseEntity<Orders> getOrderByUserId (@PathVariable Long idUser){
        Orders order =orderService.findOrderByUserId(idUser);
        return new ResponseEntity<>(order, HttpStatus.OK);
    }
}
