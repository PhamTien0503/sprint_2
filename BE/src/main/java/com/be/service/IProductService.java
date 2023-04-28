package com.be.service;

import com.be.model.Brands;
import com.be.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductService {
    Page<Product> getProductList(String nameProduct, Pageable pageable);
}
