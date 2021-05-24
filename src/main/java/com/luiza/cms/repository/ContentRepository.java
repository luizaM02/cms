package com.luiza.cms.repository;

import com.luiza.cms.entity.ContentEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ContentRepository extends CrudRepository<ContentEntity, Long> {

    List<ContentEntity> findByParentId(Long parentId);
}
