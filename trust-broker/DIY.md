Do it yourself - Trust Broker
=============================

### Create App
```
# from project root
grails create-app TrustBroker --profile rest-api --features  mongodb,json-views,security  
```
 
### Setup
```
cd trust-broker
grails 
# at grails prompt: Generate User, Role, UserRole domains
s2-quickstart trustbroker User Role
create-domain-class Organization
create-restful-controller User
# add UrlMapping for User i.e.,"/api/users"(resources:'user') in UrlMappings.groovy
generate-views User
```

add security filter for [/api/**](http://alvarosanchez.github.io/grails-angularjs-springsecurity-workshop/#_securing_the_rest_api_20_minutes)
 

### Info 
```
cd trust-broker
# List available profiles
grails list-profiles
# Getting More Information About A Profile
grails profile-info angular
# list URL Mappings
grails url-mappings-report
```

Ref:
http://alvarosanchez.github.io/grails-angularjs-springsecurity-workshop/
https://github.com/alvarosanchez/grails-angularjs-springsecurity-workshop
http://gorm.grails.org/latest/mongodb/manual/
CustomUserDetailsService
https://grails-plugins.github.io/grails-spring-security-core/v2/guide/userDetailsService.html