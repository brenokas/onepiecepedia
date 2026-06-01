package com.brenokas.onepiecepedia.adapter.in.web.dto;

import java.util.UUID;

public record UserResponseDTO(
  UUID id,
  String name,
  String email
) {

}
