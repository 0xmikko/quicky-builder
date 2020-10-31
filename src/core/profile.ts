/*
 * Copyright (c) 2020. Mikael Lazarev
 */

export interface Profile{
  id: string;
  name: string;
  avatar: string;
  isQBTokenEntered: boolean

}

export interface ProfileChangeNameDTO extends Record<string, string>{
  name: string;
}
