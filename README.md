# Dockerize-React-app
For a full step-by-step guide, head-on over to my blog <a href="https://medium.com/@muzammilsarwar0/containerize-your-react-js-app-with-docker-a-step-by-step-guide-c46e349f78c" target="_blank" >here</a>

<br/>
<br/>

Following are the steps I took for containerizing a React.js application

1. Create / Clone a basic React.js application
![Photo](https://user-images.githubusercontent.com/33463845/218195355-3d42230f-fd03-4f80-9825-3cadceba5e6c.png)

2. Create a `Dockerfile` in project root folder 
3. Paste the following code in Dockerfile......
    ```
    FROM node:18 as react
    WORKDIR /app
    COPY package* .
    RUN npm install
    COPY public ./public
    COPY src ./src
    RUN npm run build

    FROM nginx:alpine
    COPY --from=react /app/build /usr/share/nginx/html

    ```
    Also create .dockerignore file and paste this in it...
    ```
    node_modules
    ```
4. So now, nginx will serve our application from the build directory to default port 80 of the container
5. Build the image by running `docker build -t react-app .`
6. After the image is built, it can be listed by running `docker images`
7. Finally, we can create a container using the image created above by running `docker run -dp 3000:80 react-app`  
   This will run the container in a detached/background mode. List all the containers using `docker ps`
8. You've successfully dockerized your react.js application.
9. Currently your docker image is in your local machine, but what if you need to create your container on another machine ? We have a solution to this via pushing our image on container registeries such as DockerHub or ECR. Let's push our image on DockerHub for now
10. After creating an account and successfully logging in, create a new repository *react-app*. Your repository name will be [Username]/react-app
11. Open terminal, now we have to tag our image with repository name. We'll run this `docker tag react-app muzammil98/react-app`
12. Finally, we can now push our image. Run `docker push muzammil98/react-app`
![Photo](https://user-images.githubusercontent.com/33463845/218202447-7160c80d-8074-47f5-a982-34829d1380bf.png)

You have successfully dockerized your app and pushed to DockerHub
