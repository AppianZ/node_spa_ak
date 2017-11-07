import { Router, Request, Response, NextFunction } from 'express';
const router = Router();
import checkToken from '../middleware/check.token';
import TestApi from '../apis/test';

router.post('/newauth', checkToken, async function (req: Request, res: Response, next: NextFunction) {
    try {
        res.send({
            msg: 'ok, to homepage',
        });
    } catch (err) {
        next(err);
    }
});


router.get('/newtest', checkToken, async function (req: Request, res: Response, next: NextFunction) {
    console.log('---- newtest --- awaitdata ---');
    console.log(req.body);
    // console.log(req['Authorization']);
    try {
        const result = await new TestApi(req).getTest(req.body);
        console.log('--- await2 ---')
        console.log(result);
        res.send(result);
    } catch (err) {
        next(err);
    }
});


router.post('/auth', async function (req: Request, res: Response, next: NextFunction) {
    const list = new TestApi(req).getUser('appian');
    try {
        const result = await list;
        console.log('--- await ---')
        console.log(result.data)
        res.send({
            name: 'appian',
            age: 23
        });
    } catch (err) {
        next(err);
    }
});

router.post('/authuser', async function (req: Request, res: Response, next: NextFunction) {
    const list = new TestApi(req).getToken({
        "platform": "app",
        "type": "URL",
        "title": "google1",
        "address": "www.google.com",
        "status": "disabled"
    });
    try {
        const result = await list;
        console.log('--- await ---')
        console.log(result.data)
        res.send(result.data);
    } catch (err) {
        next(err);
    }
});

module.exports = function (app) {
  app.use('/api', router);
};

