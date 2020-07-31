const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");
const { sum } = require("../database");

router.get("/", async (request, response) => {
  
  try {
    let result = await knex(`meal`).select(`*`).limit(10);
    const maxPrice = request.query.maxPrice;
    const availableReservations = request.query.availableReservations;
    const title = request.query.title;
    const createdAfter = request.query.createdAfter;
    const limit = request.query.limit;
    if(maxPrice){
       result = await knex(`meal`).where(`price`,`<`,`${maxPrice}`).select(`*`);
    }if(availableReservations){
      result = await knex.select( "meal.id" , "meal.title").from("meal")
      .sum("reservation.number_of_guests as total")
      .avg("meal.max_reservation as number")
      .join("reservation","reservation.meal_id" , "meal.id")
      .groupBy( "meal.id")
      .having("total",">","number");     
    
    }if(title){
      result = await knex(`meal`).where(`title`,`like`,`${title}%`);
    }if(createdAfter){
      result = await knex(`meal`).where(`created_date`,`>`,`${createdAfter}`);
    }if(limit){
     result =result.splice(0,limit);
    }
    response.json(result);
  } catch (error) {
    throw error;
  }
});
router.post("/",async (req,res)=>{
  try{
    const insert = await knex('meal').insert(req.body);
    res.send(insert); 
  } catch(error){
    throw error;
  }  
});
router.get("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const result = await knex("meal").where({id : id}).select("*");
    response.json(result);
  } catch (error) {
    throw error;
  }
});
router.put("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const result = await knex("meal").where({id : id}).update(request.body);
    response.json(result);
  } catch (error) {
    throw error;
  }
});router.delete("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const result = await knex("meal").where({id : id}).delete();
    response.json(result);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
