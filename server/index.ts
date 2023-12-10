#! /usr/bin/env bun
import { Erica } from '@muzamint/erica'
import { json, error } from 'itty-router';
import  * as ChainList from 'viem/chains';

const PORT: number = +(process.env.PORT || 3000);
const NODE_ENV = process.env.NODE_ENV ?? "development";

const erica: Erica = new Erica()
const router = erica.getRouter()
var chainlist = []
var id_counter = 0;

for(var i in ChainList)
    chainlist.push({ id: id_counter++, meta: ChainList[i]});

router.get('/api/v1/chainlist', () => chainlist)
    .get('/todos/:id',
      (request: IRequest) => `${request.params.id}`
    )

const server = Bun.serve({
  port: PORT,
  fetch(request) {
    return router
      .handle(request)
      .then(json) // send as JSON
      .catch(error) // catch errors
  },
})

console.log(`[${NODE_ENV}] Listening on port ${server.port}`);
console.log('➜ Try http://localhost:3000/api/v1/chainlist');
