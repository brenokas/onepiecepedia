package com.brenokas.onepiecepedia.domain.model;

import java.time.LocalDateTime;
import java.util.UUID;

public record Quiz (
  UUID id,
  LocalDateTime startDateTime,
  LocalDateTime endDateTime,
  User user,
  Character character
) {

}
