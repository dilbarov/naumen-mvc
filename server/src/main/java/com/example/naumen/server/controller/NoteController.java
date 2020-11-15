package com.example.naumen.server.controller;


import com.example.naumen.server.model.Note;
import com.example.naumen.server.service.NoteService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("api/notes")
public class NoteController {

    private final NoteService noteService;

    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @GetMapping("/")
    public List<Note> all(@RequestParam(defaultValue = "") String search) {
        System.out.println("get");
        return noteService.all(search);
    }

    @GetMapping("/{id}")
    public Note getById(@PathVariable long id) {
        return noteService.get(id);
    }

    @PostMapping("/add")
    public Note add(@RequestBody Note note) throws ResponseStatusException {
        if (note.getText().length() > 256) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "Text length exceeds 256 allowed characters"
            );
        }
        return noteService.add(note);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") long id) {
        System.out.println("delete");
        Note note = noteService.get(id);
        if (note == null) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "Note not found"
            );
        }
        noteService.delete(note);
    }
}
