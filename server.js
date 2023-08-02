import express from 'express'
import mysql from 'mysql2/promise'
import mongoose from 'mongoose'

const app = express()

//DOCKER MYSQL = docker run --name projectmysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=fiona2009 mysql


const client= mysql.createPool({
    host:'localhost',
    port:3306,
    user:'root',
    password:'fiona2009'
})

const response = await client.query('SELECT 1 + 1')
console.log(response)


//DOCKER MONGO = docker run --name mymongo -p 27017:27017 mongo


const mongoConnection = await mongoose.connect('mongodb://localhost:27017/tester')
console.log(mongoConnection.connection.db.databaseName) //tester


app.listen(3000)
console.log(`Server on port 3000`)