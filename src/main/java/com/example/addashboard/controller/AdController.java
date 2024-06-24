package com.example.addashboard.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class AdController {

    @GetMapping("/ads")
    public List<Ad> getAds() {
      
        return Arrays.asList(
            new Ad("2024-06-01", 100),
            new Ad("2024-06-02", 200)
        );
    }

    public static class Ad {
        private String date;
        private int value;

        public Ad(String date, int value) {
            this.date = date;
            this.value = value;
        }

        public String getDate() {
            return date;
        }

        public void setDate(String date) {
            this.date = date;
        }

        public int getValue() {
            return value;
        }

        public void setValue(int value) {
            this.value = value;
        }
    }
}
