package com.bookstore.backend.controller;

import com.bookstore.backend.entity.BookRequest;
import com.bookstore.backend.repository.BookRequestRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/book-requests")
public class BookRequestController {

    private final BookRequestRepository repository;

    public BookRequestController(BookRequestRepository repository) {
        this.repository = repository;
    }

    // USER: submit request
    @PostMapping
    public BookRequest createRequest(@RequestBody BookRequest request) {
        return repository.save(request);
    }

    // ADMIN: get all requests
    @GetMapping
    public List<BookRequest> getAllRequests() {
        return repository.findAll();
    }

    // ADMIN: approve request
    @PutMapping("/{id}/approve")
    public BookRequest approveRequest(@PathVariable Long id) {
        BookRequest request = repository.findById(id).orElseThrow();
        request.setStatus("APPROVED");
        return repository.save(request);
    }

    // ADMIN: reject request
    @PutMapping("/{id}/reject")
    public BookRequest rejectRequest(@PathVariable Long id) {
        BookRequest request = repository.findById(id).orElseThrow();
        request.setStatus("REJECTED");
        return repository.save(request);
    }
}
