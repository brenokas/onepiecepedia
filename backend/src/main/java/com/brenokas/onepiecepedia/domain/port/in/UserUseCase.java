package com.brenokas.onepiecepedia.domain.port.in;

import com.brenokas.onepiecepedia.adapter.in.web.dto.UserRequestDTO;
import com.brenokas.onepiecepedia.adapter.in.web.dto.UserResponseDTO;

// contrato que define o que esse domínio vai fazer
public interface UserUseCase {
  UserResponseDTO create(UserRequestDTO userRequest);

}
