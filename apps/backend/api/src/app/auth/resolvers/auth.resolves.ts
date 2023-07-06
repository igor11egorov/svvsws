import { Query, Resolver } from '@nestjs/graphql'
// eslint-disable-next-line @nx/enforce-module-boundaries
import type { ISignAuthPayload, ISignAuthResponse } from '@svvsws/shared/data-access/interfaces'
import { SignIn } from '../decorators/auth.decorators'
import { AuthService } from '../services/auth.service'


@Resolver('Auth')
export class AuthResolves {
  constructor(
    private readonly authService: AuthService,
  ) {
  }

  @Query('login')
  async login(@SignIn() signInPayload: ISignAuthPayload): Promise<ISignAuthResponse> {
    return await this.authService.login(signInPayload)

  }

  @Query('logout')
  async logout(): Promise<boolean> {
    return true
  }
}