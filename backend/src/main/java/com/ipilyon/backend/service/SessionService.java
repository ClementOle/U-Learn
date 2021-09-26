package com.ipilyon.backend.service;

import com.ipilyon.backend.dto.UserDto;

public interface SessionService {

	/**
	 * Sauvegarde un utilisateur en base
	 * @param userDto Le UserDto à sauvegarder
	 * @return Le UserDto sauvegarder
	 */
	UserDto signIn(UserDto userDto);

	UserDto findUserByUserName(String userName);
}
