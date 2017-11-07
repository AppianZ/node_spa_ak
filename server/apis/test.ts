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
        const token = await http.get(this.req, '/content/customer/content?platform=app', {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNTllODNlN2NkZDdjNGE1MWI3MDM2ZmFjIiwidXNlcl9uYW1lIjoiNTllODNlN2NkZDdjNGE1MWI3MDM2ZmFjIiwic3lzdGVtX2lkIjoiYXBwX3BsYXRmb3JtIiwiZXh0cmEiOnt9LCJzY29wZSI6WyJvcGVuaWQiLCJ3cml0ZSIsInJlYWQiLCJzb3BfYmFzZSIsInNvcF91YWMiLCJzb3Atc29uaWMtc2VydmljZSIsInNvcC1jdXN0LXNlcnZpY2UiLCJzb3AtY3VzdC1wbGF0Zm9ybS1zZXJ2aWNlIiwic29wLWNvbnRlbnQtc2VydmljZSIsInNvcC1wdXNoLXNldHRpbmctc2VydmljZSIsInNvcC1hcHAtc2VydmljZSIsInNvcC1wbGF0Zm9ybSIsInNvcF9zbXMiLCJzb3BfbWFpbCJdLCJhdHRyaWJ1dGVzIjp7ImxvZ2luVHlwZSI6InVzZXJuYW1lIiwibmlja05hbWUiOiJ1c2VyXzEwMDAwMDAwMjA0In0sImV4cCI6MTUxMDEzMzE1MiwianRpIjoiZDNjNzEyOGMtYTI5Zi00ZmZjLWI4YmItYTJhYWQwMDMxMDlhIiwiY2xpZW50X2lkIjoic29wX2FwcF9wbGF0Zm9ybSJ9.EBZcaEvcC37_fOn7mmmjhIvm2m_e2zbYyZ8648WcuB2_wzYWC_NEWkADS6mDX3q0Qw9ivcL14A0s5VbXKLEZMtpWUg1MMXDmLLrGUKQMjRhyyztvKpJSkKMNmq0Uj5sP8EdAiTGvHNi8QQrDEjIRsFHL_9UCPIR4I_mmw0MttmRjOjWrkYtTJgJfVGVBSjwhDO_0kWSrZ_hWjhKlSFHsYlt-CI1WKo-j5wwHiOLIB6AfXlbkfszq7gjlVA2qyrAUaxgCn8bvojVaYQpFqhwWQVBriPj2PNcDL68-QKd0uSgmwB_Akr3-xXei_f9ynhnYbJun8uSZMdXlavhr-A0F-w',
            },
        });
        return token;
    }
}

export default TestApi;
