package com.brenokas.onepiecepedia.domain.model;

import java.util.UUID;

public record Character (
  UUID id,
  String nome,
  String funcao,
  Long recompensa,
  String descricao
) {

}
