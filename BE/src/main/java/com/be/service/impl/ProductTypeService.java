package com.be.service.impl;

import com.be.model.ProductType;
import com.be.repository.IProductTypeRepository;
import com.be.service.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductTypeService implements IProductTypeService {
    @Autowired
    private IProductTypeRepository productTypeRepository;

    @Override
    public List<ProductType> getAllProductType() {
        return productTypeRepository.findAll();
    }
}
