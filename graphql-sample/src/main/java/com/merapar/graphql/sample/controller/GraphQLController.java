package com.merapar.graphql.sample.controller;

import graphql.ExecutionResult;
import java.util.LinkedHashMap;
import java.util.Map;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by tim.urista on 7/15/17.
 */
@RestController
public class GraphQLController {

	@RequestMapping(value = "/graphql", method = RequestMethod.POST)
	@ResponseBody
	public Object executeOperation(@RequestBody Map body) {
		String query = (String) body.get("query");
		Map<String, Object> variables = (Map<String, Object>) body.get("variables");
		if (variables == null) {
			variables = new LinkedHashMap<>();
		}
		// TODO: graphql.execute(body), need ot make graphQL object
		ExecutionResult executionResult = null;
		Map<String, Object> result = new LinkedHashMap<>();

		// temporary null checker, to be replaced or removed
		if (executionResult == null) {
			result.put("Error", new Object());
			return result;
		}

		if (executionResult.getErrors().size() > 0) {
			result.put("errors", executionResult.getErrors());
			System.out.printf("Errors: {}", executionResult.getErrors());
		}
		result.put("data", executionResult.getData());
		return result;
	}
}
