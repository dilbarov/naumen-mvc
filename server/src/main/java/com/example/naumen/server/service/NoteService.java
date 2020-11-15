package com.example.naumen.server.service;

import com.example.naumen.server.model.Note;
import com.example.naumen.server.repository.NoteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteService {

    private final NoteRepository noteRepository;

    public NoteService(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    public List<Note> all(String subString) {
        return noteRepository.getBySubString(subString);
    }

    public Note add(Note note) {
        return noteRepository.save(note);
    }

    public void delete(Note note) { noteRepository.delete(note);}
}
