package com.merapar.graphql.sample.controller;

import com.merapar.graphql.sample.models.RecordsBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by tim.urista on 7/15/17.
 */
@RestController
public class GraphQLController {

	@RequestMapping("/app/testUserQuery")
	public @ResponseBody
	RecordsBody testUserQuery() {
		return new RecordsBody();
	}

}
