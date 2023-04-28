package com.be.service.impl;

import com.be.model.Brands;
import com.be.model.Product;
import com.be.repository.IProductRepository;
import com.be.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;
    @Override
    public Page<Product> getProductList(String nameProduct, Pageable pageable) {
        return productRepository.findByNameContaining(nameProduct,pageable);
    }
}
