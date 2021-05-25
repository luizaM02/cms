package com.luiza.cms;

import com.google.common.cache.CacheBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.guava.GuavaCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.concurrent.TimeUnit;

@Configuration
@EnableCaching
@ConditionalOnProperty(prefix = "cache", name = "enabled", havingValue = "true")
public class CacheConfig {

    @Value("${cache.ttl.seconds}")
    private Integer cacheTtlSeconds;

    @Bean
    public CacheManager cacheManager() {
        GuavaCacheManager guavaCacheManager = new GuavaCacheManager("documents");

        guavaCacheManager.setCacheBuilder(
                CacheBuilder
                        .newBuilder()
                        .expireAfterWrite(cacheTtlSeconds, TimeUnit.SECONDS)
        );

        return guavaCacheManager;
    }

}