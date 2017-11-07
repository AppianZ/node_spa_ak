import * as http from '../libs/axios';
import { Request } from '@types/express';
/**
 * TestApi模块的api
 * @param req
 * @constructor
 */
class TestApi {
    private req: Request;
    constructor(req: Request) {
        this.req = req;
    }
    async getTestInit(user:string) {
        // const $state = await http.get(this.req, `/test1?user=${user}`);
        const $state = {
            data : {
                name: user,
                id: 'testid123',
            }
        }
        return $state.data;
    }

    async getUser(name:string) {
        const list = await http.get(this.req, '/search/users', {
            data: {
                q: name
            }
        });
        return list.data;
    }

    async getToken(data:any) {
        const token = await http.get(this.req, 'cust/platform/customer?platform=app', {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNTllODljODY3MDRiMWQxOWI5YTA0MmJhIiwidXNlcl9uYW1lIjoiNTllODljODY3MDRiMWQxOWI5YTA0MmJhIiwic3lzdGVtX2lkIjoiYXBwX3BsYXRmb3JtIiwiZXh0cmEiOnt9LCJzY29wZSI6WyJvcGVuaWQiLCJ3cml0ZSIsInJlYWQiLCJzb3BfYmFzZSIsInNvcF91YWMiLCJzb3Atc29uaWMtc2VydmljZSIsInNvcC1jdXN0LXNlcnZpY2UiLCJzb3AtY3VzdC1wbGF0Zm9ybS1zZXJ2aWNlIiwic29wLWNvbnRlbnQtc2VydmljZSIsInNvcC1wdXNoLXNldHRpbmctc2VydmljZSIsInNvcC1hcHAtc2VydmljZSIsInNvcC1wbGF0Zm9ybSIsInNvcC1hZ2VudCIsInNvcC1iYWxhbmNlIiwic29wLWN1c3QtYXBwbHktcGxhdGZvcm0tc2VydmljZSIsInNvcC1zb25pYy1zdG9yYWdlLXNlcnZpY2UiXSwiYXR0cmlidXRlcyI6eyJsb2dpblR5cGUiOiJ1c2VybmFtZSIsIm5pY2tOYW1lIjoidXNlcl8xMDAwMDAwMDE1MyJ9LCJleHAiOjE1MTAxMjUzNTAsImp0aSI6IjAxMmI5NjZmLTYzNWMtNGRhYy1iYjZmLTQ1NmQwMTIyZjE5NSIsImNsaWVudF9pZCI6InNvcF9hcHBfcGxhdGZvcm0ifQ.c0Kmko9VNmolc_PUBjDP_h5IjYpJxena4AZsdcEJPquYRBxjN_oHFr6N4SJOTUMNGbAnTQB6kHI-Xm0Y7_FRJ6kMV6ndQm7vo1QQxC13iqAyDfJH_g52eA0u_Z66bYVJqHqdvT6GqWSCy0wK0No3vF3Lz-JcTaEo-uKDQ0t8_qVMFJpGgD5idW8-4M3F_oww1LA-mpoXfrz1vjXI-2Cz40gJRtz_7G6whPDRtkGZ-XzqS0AttinlBkITe7bMe3Uk-kHsfg66PKVghflkC_LPMd47darDYUix-vjnMz4X9gA05Z9eQQxKF1phiNOLX0s0uxyzA5hmy0o6ppm7c-QKOA',
            },
        });
        return token;
    }
}

export default TestApi;
