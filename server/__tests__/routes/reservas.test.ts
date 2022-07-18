import express from 'express';
import request from 'supertest';
import {reservasRoute} from '../../src/route';


const app = express();
app.use(express.json())
app.use(reservasRoute);

describe('/reservas', ()=>
    test('should return status 200 & content-type "application/json"',async ()=>{
        const response = await request(app)
        .get('/reservas')
        .set('Authorization', `Bearer eyJhbGciOiJIUzI1NiJ9.ZWR1ckBtYWlsLmNvbQ.UqqO6APmGNwy3fC-tl_qdeCNMkaCOizjeHk5btr_KOI`);
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toContain('application/json')
    }))

    