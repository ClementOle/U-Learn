package com.ipilyon.backend.config;


import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

@Component
public class AppAuthProvider extends DaoAuthenticationProvider {

	@Autowired
	UserDetailsService userDetailsService;

	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {

		UsernamePasswordAuthenticationToken auth = (UsernamePasswordAuthenticationToken) authentication;

		String name = auth.getName();
		String password = auth.getCredentials().toString();


		UserDetails user = userDetailsService.loadUserByUsername(name);

		if (user == null || !Objects.equals(user.getPassword(), password)) {
			throw new BadCredentialsException("Username/Password does not match for " + auth.getPrincipal());
		}

		return new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());

	}

	@Override
	public boolean supports(Class<?> authentication) {
		return true;

	}

	@Override
	protected void doAfterPropertiesSet() {
		if (super.getUserDetailsService() != null) {
			System.out.println("UserDetailsService has been configured properly");
		}
	}
}
