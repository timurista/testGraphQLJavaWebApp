package com.merapar.graphql.sample.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by tim.urista on 7/11/17.
 * picks up as request mapping
 *
 * https://stormpath.com/blog/crud-application-react-spring-boot-user-authentication
 */
@Controller
public class MainController {

	@RequestMapping("/")
	public String index() {
		return "index.html";
	}

	// TODO: consider using https://github.com/eirslett/frontend-maven-plugin

}
