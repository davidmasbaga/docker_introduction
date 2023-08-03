# Introduction to Docker 🐳

## Docker commands

### <strong>Show All Images</strong><Br>
Show all images we have on or SO

```
docker images
```

### <strong>Download Image</strong><Br>
>To download an image we use docker pull. With just that command we download the last version by default


```
docker pull node
```

### **· Create Containter**<Br>
To create a container. It returns an ID, for example: b62eab2930c25c5757f16cacf77fb210f9884335fb24eaa331dd0173f8b09a3b 
```
docker create mongo
```
#### **Create container with custom name**
```
docker create --name <customname> mongo
```

### <strong>· Start Container</strong><br>
To start our container we've to write:
```
docker start <our-container-id>
```
### **Create and run container**
Is possible to create and run a container with this command line

```
docker run --name mymongo -p 27017:27017 mongo
```
>**Docker start** command will start any stopped container. If you used docker create command to create a container, you can start it with this command.

>**Docker run** command is a combination of create and start as it creates a new container and starts it immediately.

### **· Show Containers**<br>
To show our containers we'll write <strong>docker ps</strong>, then it returns a new list which contains a short ID. We can use in the future that short ID tu start our container

<strong>Show containers running (active)    

```
docker ps
```
<strong>  Show all containers running and stopped 

```
docker ps -a
```   

### · **Stop Containers**<br>
We stop our containers with the command above. 
> NOTE: we can use our short ID too


```
docker stop <full container ID or short container ID>
```

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
