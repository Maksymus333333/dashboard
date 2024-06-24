package com.example.addashboard.model;

import com.example.addashboard.model.AdData;


public class AdData {
    private String date;
    private int impressions;
    private int clicks;

    public AdData(String date, int impressions, int clicks) {
        this.date = date;
        this.impressions = impressions;
        this.clicks = clicks;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getImpressions() {
        return impressions;
    }

    public void setImpressions(int impressions) {
        this.impressions = impressions;
    }

    public int getClicks() {
        return clicks;
    }

    public void setClicks(int clicks) {
        this.clicks = clicks;
    }
}
