import { Request, Response, NextFunction } from "@types/express";
import * as http from '../libs/axios';
const expiresTime:number = 3 * 24 * 60 * 60 * 1000; // cookies 过期时间 3d
import * as util from '../libs/util';
import TestApi from '../apis/test';

export default async function (req:Request, res:Response, next:NextFunction) {
  console.log('------ checktoken22222 ---- data ----');
  console.log(req.body);

  try {
      const ret = await new TestApi(req).getToken(req.body);

      // res设置cookie.x-auth-token
      const token = util.UpperFirstLetter(ret.data.token_type) + ' ' + ret.data.access_token;
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
