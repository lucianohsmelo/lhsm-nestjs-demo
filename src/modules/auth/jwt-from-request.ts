import { Request } from 'express';
import { JwtFromRequestFunction } from 'passport-jwt';

export function fromCookie(req: Request) {
  return req.headers[''];
}
