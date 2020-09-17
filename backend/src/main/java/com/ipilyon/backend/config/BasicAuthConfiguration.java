package com.ipilyon.backend.config;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.Http403ForbiddenEntryPoint;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.security.web.authentication.logout.SimpleUrlLogoutSuccessHandler;

@Configuration
@EnableWebSecurity
public class BasicAuthConfiguration extends WebSecurityConfigurerAdapter {


	@Qualifier("userServiceImpl")
	@Autowired
	UserDetailsService userDetailsService;


	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsServiceBean());
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf()
				.disable()
				.exceptionHandling()
				.authenticationEntryPoint(new Http403ForbiddenEntryPoint() {
				})
				.and()
				.authenticationProvider(getProvider())
				.formLogin()
				.loginProcessingUrl("/login")
				.successHandler(new AuthentificationLoginSuccessHandler())
				.failureHandler(new SimpleUrlAuthenticationFailureHandler())
				.and()
				.logout()
				.logoutUrl("/logout")
				.logoutSuccessHandler(new AuthentificationLogoutSuccessHandler())
				.invalidateHttpSession(true)
				.and()
				.authorizeRequests()
				.antMatchers("/").permitAll()
				/*.antMatchers("/login").permitAll()
				.antMatchers("/logout").permitAll()
				.antMatchers("/user").authenticated()
				.anyRequest().permitAll()*/;
	}

	@Bean
	public AuthenticationProvider getProvider() throws Exception {
		AppAuthProvider provider = new AppAuthProvider();
		provider.setUserDetailsService(userDetailsServiceBean());
		return provider;
	}

	private class AuthentificationLoginSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
		@Override
		public void onAuthenticationSuccess(HttpServletRequest request,
				HttpServletResponse response, Authentication authentication)
				throws IOException, ServletException {
			response.setStatus(HttpServletResponse.SC_OK);
		}
	}

	private class AuthentificationLogoutSuccessHandler extends SimpleUrlLogoutSuccessHandler {
		@Override
		public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response,
				Authentication authentication) throws IOException, ServletException {
			response.setStatus(HttpServletResponse.SC_OK);
		}
	}

}