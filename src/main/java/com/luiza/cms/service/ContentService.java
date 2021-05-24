package com.luiza.cms.service;

import com.luiza.cms.dto.ContentDto;
import com.luiza.cms.entity.ContentEntity;
import com.luiza.cms.repository.ContentRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContentService {

    private final ContentRepository contentRepository;
    private final ModelMapper modelMapper;

    public ContentService(ContentRepository contentRepository, ModelMapper modelMapper) {
        this.contentRepository = contentRepository;
        this.modelMapper = modelMapper;
    }

    public List<ContentDto> getByParentId(Long id) {
        List<ContentEntity> contentEntities = contentRepository.findByParentId(id);
        return modelMapper.map(contentEntities, new TypeToken<List<ContentDto>>() {}.getType());
    }
}
