package com.luiza.cms.repository;

import com.luiza.cms.entity.ContentEntity;
import org.springframework.data.repository.CrudRepository;

public interface ContentRepository extends CrudRepository<ContentEntity, Long> {

    ContentEntity findByParentId(Long parentId);
}
