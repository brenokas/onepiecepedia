package com.brenokas.onepiecepedia.domain.model;

import java.util.UUID;

// entidade pura
public record User (
    UUID id,
    String name,
    String email,
    String password
  ) {
}
