package com.be.service;

import com.be.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductService {
    Page<Product> getProductList(String nameProduct, Pageable pageable);
    Page<Product> getAllProduct(String nameProduct, Integer brandId, Integer productTypeId, Pageable pageable);
    Product findProductById(Long id);
    void updateQuantity(Product product);
}
