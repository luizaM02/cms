package com.luiza.cms;

import com.luiza.cms.entity.ContentEntity;
import com.luiza.cms.repository.ContentRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class DatabaseIntegrationTests {

	@Autowired
	private ContentRepository contentRepository;

	@Test
	void When_DbIsInitialized_Expect_DataIsPresent() {
		int EXPECTED_TOTAL_ROW_NUMBER = 7;
		assertEquals(EXPECTED_TOTAL_ROW_NUMBER, contentRepository.count());
	}

	@Test
	void When_FindByNullParentId_Expect_RootFolders() {
		List<ContentEntity> rootFolders = contentRepository.findByParentId(null);

		int EXPECTED_TOTAL_ROOT_FOLDERS = 2;
		assertEquals(EXPECTED_TOTAL_ROOT_FOLDERS, rootFolders.size());
	}

	@Test
	void When_FindByParentId_Expect_DataIsPresent() {
		Long PARENT_ID = 1L;
		List<ContentEntity> children = contentRepository.findByParentId(PARENT_ID);

		int EXPECTED_TOTAL_CHILDREN_FOR_PARENT_ID = 3;
		assertEquals(EXPECTED_TOTAL_CHILDREN_FOR_PARENT_ID, children.size());
	}

}
