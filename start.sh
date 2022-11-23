cd client

docker build -t client .

cd ..

cd server

docker build -t server .

cd ..

docker network create test_network

docker run -d --name server -p 9000:9000 --network test_network server

docker run -d --name client  -p 3000:3000 --network test_network client