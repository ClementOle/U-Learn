package com.ipilyon.backend.config;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.hateoas.client.LinkDiscoverer;
import org.springframework.hateoas.server.LinkRelationProvider;
import org.springframework.hateoas.server.core.EvoInflectorLinkRelationProvider;
import org.springframework.http.MediaType;
import org.springframework.plugin.core.OrderAwarePluginRegistry;
import org.springframework.plugin.core.PluginRegistry;

@Configuration
@EnableSwagger2
public class SwaggerConfig {


	@Bean
	public PluginRegistry<LinkDiscoverer, MediaType> discoverers(
			OrderAwarePluginRegistry<LinkDiscoverer, MediaType> relProviderPluginRegistry) {
		return relProviderPluginRegistry;
	}

	@Bean
	public LinkRelationProvider provider() {
		return new EvoInflectorLinkRelationProvider();
	}

	@Bean
	public Docket api() {

		return new Docket(DocumentationType.SWAGGER_2).select()
				.apis(RequestHandlerSelectors
						.basePackage("com.ipilyon.backend.controller"))
				.paths(PathSelectors.any())
				.build().apiInfo(apiEndPointsInfo());
	}

	private ApiInfo apiEndPointsInfo() {

		return new ApiInfoBuilder().title("Spring Boot REST API")
				.description("Language Management REST API")
				.contact(new Contact("Swathi Prasad", "www.techshard.com", "techshard08@gmail.com"))
				.license("Apache 2.0")
				.licenseUrl("http://www.apache.org/licenses/LICENSE-2.0.html")
				.version("1.0-SNAPSHOT")
				.build();
	}

}
