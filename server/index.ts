#! /usr/bin/env bun
import { Erica } from '@muzamint/erica'
import { json, error } from 'itty-router';
import  * as ChainList from 'viem/chains';

const erica: Erica = new Erica()
const router = erica.getRouter()
var chainlist = []
var id_counter = 0;

for(var i in ChainList)
    chainlist.push({ id: id_counter++, meta: ChainList[i]});

console.log(chainlist[2])

router.get('/api/v1/chainlist', () => chainlist)
    .get('/todos/:id',
      (request: IRequest) => `${request.params.id}`
    )

Bun.serve({
  port: 3000,
  fetch(request) {
    return router
      .handle(request)
      .then(json) // send as JSON
      .catch(error) // catch errors
  },
})
