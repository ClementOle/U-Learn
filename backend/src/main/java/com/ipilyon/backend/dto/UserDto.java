package com.ipilyon.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto implements UserDetails {

	private Integer usersId;

	private String username;

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return null;
	}

	@Override
	public boolean isAccountNonExpired() {
		return false;
	}

	@Override
	public boolean isAccountNonLocked() {
		return false;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return false;
	}

	private String nom;

	private String prenom;

	private String email;

	private String password;

	private Boolean createur;

	private Integer scoreGlobal;

	@Override
	public boolean isEnabled() {
		return false;
	}

	private List<ProgressionDto> progressions;
}
