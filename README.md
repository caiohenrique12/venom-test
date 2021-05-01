# venom-test
Little example how to use venom-bot with docker

## How to start

In your terminal run

`docker build . -t test-venon`

After docker build, start container with:

`docker run -p 49160:8080 -d test-venon`

If all goes well, now start venom:

- Check container_id or name with `docker ps`
- Run `docker exec -it container_id /bin/bash` to access bash docker container

Into docker, run `node index.js`

Finish :D

Venom-bot doc https://orkestral.github.io/venom/index.html
 
