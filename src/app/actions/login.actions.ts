// Section 1
import { Action } from '@ngrx/store'
import { Login } from '../models/login'

// Section 2
export const LOGIN_SUCCESSFULL  = '[LOGIN] Successfull'
export const LOGIN_FAILED    = '[LOGIN] failed'
export const LOGIN_LOGOUT    = '[LOGIN] logout'


// Section 3
export class LoginSuccessfull implements Action {
    readonly type = LOGIN_SUCCESSFULL
    constructor(public payload: Login) {}
}

export class LoginFailed implements Action {
    readonly type = LOGIN_FAILED
    constructor(public payload: Login) {}
}

export class LoginLogout implements Action {
    readonly type = LOGIN_LOGOUT
    constructor(public payload: Login) {}
}


// Section 4
export type Actions = LoginSuccessfull | LoginFailed | LoginLogout