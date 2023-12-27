#!/bin/bash
start_vscode() {
    if pgrep -x "code" > /dev/null
    then
        pass
    else
      code ../portfolio/ || {
        echo "There is no folder portfolio"
      return 1 
      }
    fi
}

case "$1" in
  install)  
  mkdir portfolio
  cd ./portfolio
  git clone https://github.com/richardo-en/react-portfolio.git || {
        echo "There is some error with 'git clone'. Try to download it by yourself. GL."
      return 1 
      }
  ./run-docker.sh help
  ;;
  prod)
    echo "Visit: http://localhost:80/"
    npm run build
    docker stop react-app
    docker rm -f react-app
    docker run -p 80:80 --name react-app app-prod -d
    start_vscode
    xdg-open http://localhost:3000/
    ;;
  dev)
    echo "Visit: http://localhost:3000/"
    docker-compose -f docker-compose.dev.yml up -d 
    start_vscode
    xdg-open http://localhost:3000/
    ;;
  npm)
    npm run start
    start_vscode
    ;;
  clr)
    docker rm -f app-dev
    docker rm -f react-app
    ;;
  help)
    echo "Here are commands that you can run with my app and docker. Enjoy!"
    echo "prod - Starts production version of react and starts vs code"
    echo "dev - Starts development version of react and starts vs code"
    echo "clr - Deletes containers for portfolio"
    echo "restart - Restart container for development enviroment"
    echo "stop - Stops any running containers"
    echo "npm - Runs aplication using npm and starts vs code"
    echo "install - Installs needed files for running aplicaiton"
    ;;
  restart)
    docker stop app-dev
    echo "Visit: http://localhost:3000/"
    docker-compose -f docker-compose.dev.yml up -d 
    ;;
  stop)
    docker stop $(docker ps -a -q)
    ;;
  *)
    echo "Usage: prod | dev | clr | help | restart | stop | npm | install"
    exit 1
    ;;
esac