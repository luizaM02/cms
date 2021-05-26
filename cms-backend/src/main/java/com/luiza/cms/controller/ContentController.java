package com.luiza.cms.controller;

import com.luiza.cms.Constants;
import com.luiza.cms.dto.ContentDto;
import com.luiza.cms.service.ContentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(Constants.API_BASE_PATH)
public class ContentController {

    private final ContentService contentService;

    public ContentController(ContentService contentService) {
        this.contentService = contentService;
    }

    @GetMapping(path = "/documents")
    public ResponseEntity<List<ContentDto>> getRootDocuments() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(contentService.getByParentId(null));
    }

    @GetMapping(path = "/documents/{id}")
    public ResponseEntity<List<ContentDto>> getChildDocuments(@PathVariable("id") Long parentId) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(contentService.getByParentId(parentId));
    }
}
