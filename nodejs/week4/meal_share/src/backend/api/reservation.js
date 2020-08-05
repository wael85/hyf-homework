const express = require('express');
const router = express.Router();
const knex = require('../database');
router.get("/", async (request, response) => {
  
    try {
      const result = await knex(`reservation`).select(`*`);      
      response.json(result);
    } catch (error) {
      throw error;
    }
  });
  router.post("/",async (req,res)=>{
    try{
      const insert = await knex('reservation').insert(req.body);
      res.send(insert); 
    } catch(error){
      throw error;
    }  
  });
  router.get("/:id", async (request, response) => {
    try {
      const id = request.params.id;
      const result = await knex("reservation").where({id : id}).select("*");
      response.json(result);
    } catch (error) {
      throw error;
    }
  });
  router.put("/:id", async (request, response) => {
    try {
      const id = request.params.id;
      const result = await knex("reservation").where({id : id}).update(request.body);
      response.json(result);
    } catch (error) {
      throw error;
    }
  });
  router.delete("/:id", async (request, response) => {
    try {
      const id = request.params.id;
      const result = await knex("reservation").where({id : id}).delete();
      response.json(result);
    } catch (error) {
      throw error;
    }
  });
module.exports = router;