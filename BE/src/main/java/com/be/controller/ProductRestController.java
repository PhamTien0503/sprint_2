package com.be.controller;

import com.be.model.Product;
import com.be.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/product")
public class ProductRestController {
    @Autowired
    private IProductService productService;
    @GetMapping("/list")
    public ResponseEntity<Page<Product>> getProductList(@RequestParam (defaultValue = "",required = false) String nameProduct,
                                                        @PageableDefault(page = 1,size = 5,sort = "price",direction = Sort.Direction.ASC) Pageable pageable){
        Page<Product>products=productService.getProductList(nameProduct, pageable);
        return new ResponseEntity<>(products,HttpStatus.OK);
    }
}

