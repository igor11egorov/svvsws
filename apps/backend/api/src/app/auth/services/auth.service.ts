import { Injectable } from '@angular/core'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ISignAuthPayload, ISignAuthResponse } from '@svvsws/shared/data-access/interfaces'

@Injectable()
export class AuthService {
  login(signInPayload: ISignAuthPayload): Promise<ISignAuthResponse> {
    return
    // {
    //   accessToken: // JWT
    //   exripesIn: // JWT
    //   id: // user service
    // }
  }

}