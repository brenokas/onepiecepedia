package com.brenokas.onepiecepedia.adapter.in.web.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record UserRequestDTO(
  @NotBlank(message = "Name is required")
  @Size(min = 3, max = 100, message = "Name must be between 3 and 100 characters.")
  String name,

  @NotBlank(message = "Email is required")
  @Email(message = "Email must be valid")
  String email,

  @NotBlank
  @Size(min = 7, max = 25, message = "Password must be between 7 and 25 characters")
  String password
) {

}
