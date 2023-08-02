# Introduction to Docker


## About 

It's a short course of docker from <a href='https://www.youtube.com/watch?v=SMqdC6g6Y2o'> Docker Fatz Code </a>.

### Run mysql and mongo containers

We can run a lot of containers. For example databases. 

To run mysql we can use: 

```
docker run --name projectmysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=fiona2009 mysql
```
To run a mongodb database we can use: 

```
docker run --name mymongo -p 27017:27017 mongo
```


## DockerFile

We are using the Dockerfile of oficial page of <a href='https://nodejs.org/en/docs/guides/nodejs-docker-webapp'>NodeJs</a> to create a container with Node JS

On our Dockerfile, we are creating a installer for use the exact version of our libraries/tecnologies: Node, mongo, etc...

To build it the command is: 
```
docker build -t nodetest .
```
where -t is tag. nodetest the name we want to use to our build and . is the path 

To run our image we'll use

```
docker run --name [optional | whatever] -p 3000:3000 image_name
```

To execute the interactive mode. For example if we don't have node on our system if we write node -v nothing appears. But if we execute that line in IT (interactive Terminal) we will be able to: 

```
docker exec -it name_of_our_image bash
```


## Dockerignore
we will add to this file all those files that we want to ignore from our dockerfile

## Usage <a name = "usage"></a>

Add notes about how to use the system.
