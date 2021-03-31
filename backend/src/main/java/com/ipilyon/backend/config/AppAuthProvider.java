package com.ipilyon.backend.config;

import com.ipilyon.backend.service.impl.UserServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

@Component
public class AppAuthProvider extends DaoAuthenticationProvider {

	@Qualifier("userServiceImpl")
	@Autowired
	UserServiceImpl userDetailsService;

	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {

		UsernamePasswordAuthenticationToken auth = (UsernamePasswordAuthenticationToken) authentication;

		String name = auth.getName();
		String password = auth.getCredentials()
				.toString();


		UserDetails user = userDetailsService.loadUserByUsername(name);

		if (user == null) {
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