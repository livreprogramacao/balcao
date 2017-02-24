cp -r ~/angular/angular.io/angular-cli/balcao/dist ~/NetBeansProjects/github.com/diebold/balcao/src/main/webapp
cp -r ~/angular/angular.io/angular-cli/balcao/src/img/ ~/NetBeansProjects/github.com/diebold/balcao/src/main/webapp/dist
cp ~/angular/angular.io/angular-cli/balcao/dist/index.html ~/NetBeansProjects/github.com/diebold/balcao/src/main/webapp
mvn wildfly:undeploy clean install wildfly:deploy
