package com.be.service.impl;

import com.be.model.Brand;
import com.be.model.ProductType;
import com.be.repository.IBrandRepository;
import com.be.repository.IProductTypeRepository;
import com.be.service.IBrandService;
import com.be.service.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BrandService implements IBrandService {
    @Autowired
    private IBrandRepository brandRepository;

    @Override
    public List<Brand> getAllBrandService() {
        return brandRepository.findAll();
    }
}
