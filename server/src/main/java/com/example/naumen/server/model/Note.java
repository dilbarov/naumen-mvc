package com.example.naumen.server.model;


import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table(name = "notes")
public class Note {

    @Id
    @JsonProperty("id")
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @JsonProperty("title")
    @Column(name = "title")
    private String title;

    @JsonProperty("text")
    @Column(name = "text")
    private String text;

    public String getTitle() {
        return title;
    }

    public String getText() {
        return text;
    }
}
