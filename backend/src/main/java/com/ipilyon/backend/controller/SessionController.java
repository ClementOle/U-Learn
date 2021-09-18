package com.ipilyon.backend.controller;

import com.ipilyon.backend.dto.UserDto;
import com.ipilyon.backend.service.SessionService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Api(tags = "u'learn")
@RequestMapping(value = "/session")
public class SessionController {

	@Autowired
	private SessionService sessionService;

	@ApiOperation(value = "Sauvegarde un utilisateur")
	@PostMapping(value = "signin", produces = "application/json", consumes = "application/json")
	public UserDto signIn(@RequestBody UserDto userDto) {
		return this.sessionService.signIn(userDto);
	}
}
