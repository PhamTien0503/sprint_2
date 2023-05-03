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
                                                        @PageableDefault(page = 0,size = 5,sort = "price",direction = Sort.Direction.ASC) Pageable pageable){
        Page<Product>products=productService.getProductList(nameProduct, pageable);
        return new ResponseEntity<>(products,HttpStatus.OK);
    }
    @GetMapping("/productType/list")
    public ResponseEntity<?> getAllProductType() {
        List<ProductType> productTypeList = iProductTypeService.findAll();
        if (productTypeList.isEmpty()) {
            return new ResponseEntity<>("Không tìm thấy dữ liệu!", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(productTypeList, HttpStatus.OK);
    }

    @GetMapping("/brands/list")
    public ResponseEntity<?> getAllBrands() {
        List<Brands> brandsList = iBrandsService.findAll();
        if (brandsList.isEmpty()) {
            return new ResponseEntity<>("Không tìm thấy dữ liệu!", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(brandsList, HttpStatus.OK);
    }

    @GetMapping("/cart")
    public ResponseEntity<?> getCart(@RequestParam Long id) {
        List<IOrderDTO> orderDTOList = iOrderService.getCart(id);
        if (orderDTOList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(orderDTOList, HttpStatus.OK);
    }

    @GetMapping("/changeQuantity")
    public ResponseEntity<?> changeQuantity(@RequestParam Long orderDetailId, @RequestParam int quantity) {
        boolean checkChangeQuantity = iOrderService.changeQuantity(orderDetailId, quantity);
        if (!checkChangeQuantity) {
            return new ResponseEntity<>("Đã có lỗi xảy ra!", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/addProduct")
    public ResponseEntity<?> addProduct(@RequestParam Long personId, @RequestParam Long productId) {
        List<IOrderDTO> orderDTOList = iOrderService.getCart(personId);
        if (orderDTOList.isEmpty()) {
            iOrderService.createCart(personId, productId);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        OrderDetail orderDetail = iOrderDetailService.findByProductIdAndPersonId(productId, personId);
        if (orderDetail != null) {
            int quantity = orderDetail.getOrderedQuantity() + 1;
            iOrderService.changeQuantity(orderDetail.getId(),quantity);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            Order order = iOrderService.findByPersonId(personId);
            if(iOrderDetailService.addNewOrderDetail(new OrderDetail(1,new Product(productId),order))){
                return new ResponseEntity<>(HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}

