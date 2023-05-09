package com.be.controller;

import com.be.model.Brand;
import com.be.model.ProductType;
import com.be.service.IBrandService;
import com.be.service.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/brand")
public class BrandRestController {
    @Autowired
    private IBrandService brandService;
    @GetMapping("/list")
    public ResponseEntity<List<Brand>> getAllBrand(){
        List<Brand>brandList=brandService.getAllBrandService();
        return new ResponseEntity<>(brandList,HttpStatus.OK);
    }
}
