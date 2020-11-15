package com.example.naumen.server.repository;


import com.example.naumen.server.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NoteRepository extends JpaRepository<Note, Long> {
    @Query(nativeQuery = true, value = "SELECT * FROM notes n WHERE CONCAT(n.title, ' ', n.text, ' ') LIKE %?1%")
    List<Note> getBySubString(String subString);
}

