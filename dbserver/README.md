## Introsuction
in this directory you find the code that creates a database server in a container.
## instructions
1. moake sure you have docker installed and it's working properly
2. run this command, to build the image.
```
docker build -t fyp-postgres-image .
```
3. run your image
```
docker run --name my_postgres -p 5432:5432 -d fyp-postgres-image
```