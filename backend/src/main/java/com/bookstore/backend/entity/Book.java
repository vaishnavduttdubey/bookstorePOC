package com.bookstore.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "books")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;
    private String author;
    private String category;
    private String image;
    private String rating;
    private double price;

    @Column(length = 2000)
    private String description;

    // No-Args Constructor
    public Book() {}

    // All-Args Constructor
    public Book(String title, String author, String category, String image, String rating, String description, double price) {
        this.title = title;
        this.author = author;
        this.category = category;
        this.image = image;
        this.rating = rating;
        this.description = description;
        this.price = price;
    }

    // Getters & Setters (IMPORTANT)

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }

    public String getRating() { return rating; }
    public void setRating(String rating) { this.rating = rating; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}
