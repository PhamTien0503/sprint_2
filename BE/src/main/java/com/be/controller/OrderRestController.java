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
    @GetMapping("/list/{idUser}")
    public ResponseEntity<List<Orders>> getOrderByUserId (@PathVariable Long idUser){
        List<Orders>ordersList=orderService.findOrderByUserId(idUser);
        return new ResponseEntity<>(ordersList, HttpStatus.OK);
    }
}
