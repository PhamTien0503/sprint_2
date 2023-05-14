package com.be.controller;

import com.be.dto.ProductDto;
import com.be.model.Product;
import com.be.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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
    public ResponseEntity<Page<Product>> getAllProduct(@RequestParam(defaultValue = "", required = false) String nameProduct,
                                                       @RequestParam(defaultValue = "0", required = false) Integer brandId,
                                                       @RequestParam(defaultValue = "0", required = false) Integer productTypeId,
                                                       @RequestParam(defaultValue = "0", required = false) Integer page,
                                                       @RequestParam(defaultValue = "2", required = false) Integer size) {
        Sort sort = Sort.by(Sort.Direction.DESC, "release_date");
        Pageable pageable = PageRequest.of(page, size, sort);
        Page<Product> products = productService.getAllProduct(nameProduct, brandId, productTypeId, pageable);
        if (products.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable Long id) {
        Product product = productService.findProductById(id);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @PatchMapping("/update")
    public ResponseEntity<ProductDto> updateQuantity(@RequestBody ProductDto productDto) {
        try {
            Product product = productService.findProductById(productDto.getId());
            product.setProductQuantity(productDto.getProductQuantity());
            productService.updateQuantity(product);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}

