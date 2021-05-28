package com.luiza.cms.config;

import com.luiza.cms.dto.ContentDto;
import com.luiza.cms.entity.ContentEntity;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelMapperConfig {

    private final ModelMapper modelMapper = new ModelMapper();

    public ModelMapperConfig() {
        modelMapper.getConfiguration()
                .setFieldMatchingEnabled(true)
                .setFieldAccessLevel(org.modelmapper.config.Configuration.AccessLevel.PRIVATE);

        modelMapper.addMappings(new PropertyMap<ContentDto, ContentEntity>() {
            @Override
            protected void configure() {

            }
        });

        //AtomicReference
        modelMapper.getTypeMap(ContentDto.class, ContentEntity.class).setPostConverter(context -> {
            ContentDto source = context.getSource();
            ContentEntity target = new ContentEntity();

            //set the title in the entity with the name value
            target.setTitle(source.getName());

            return target;
        });
    }

    @Bean
    public ModelMapper modelMapper() {
        return modelMapper;
    }
}
