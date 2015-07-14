package com.fleetmagic.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

import com.netflix.hystrix.contrib.javanica.aop.aspectj.HystrixCommandAspect;

@Configuration
@ComponentScan(basePackages = "com.covisint")
@EnableAspectJAutoProxy
class AppConfig {
    
  /*  
    @Bean
    public HystrixCommandAspect hystrixAspect() {
      return new HystrixCommandAspect();
    }

*/
}