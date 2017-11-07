import { Request, Response, NextFunction } from "@types/express";
import * as http from '../libs/axios';
const expiresTime:number = 3 * 24 * 60 * 60 * 1000; // cookies 过期时间 3d
import * as util from '../libs/util';

export default async function (req:Request, res:Response, next:NextFunction) {
  console.log('------ checktoken2 ---- data ----');
  console.log(req.body);

  try {
      const ret =  await http.post(this.req, '/api/v1/uac/oauth/token', {
          data: req.body,
          headers: {
              'Authorization': 'Basic c29wX2FwcF9wbGF0Zm9ybTpZWEJ3Y0d4aGRHWnZjbTFmYzJWamNtVjA=',
          },
      }, 'form');

      // res设置cookie.x-auth-token
      const token = util.UpperFirstLetterret(ret.data.token_type) + '' + ret.data.token;
      res.cookie('Authorization', token, {
        // domain: cookieDomain,
        maxAge: expiresTime,
      });
      console.log('------ 获取token成功 ---- data ----');
      console.log(token);
      req['Authorization'] = token;
      next();
  } catch (error) {
      next(error);
  }
};
