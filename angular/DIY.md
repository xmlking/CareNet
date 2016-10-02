DIY for Angular
===============
Do-it-yourself guide to setup new Angular app.

### Setup
```bash
# install typescript
npm install -g typescript@next

# npm install -g angular-cli
npm install -g angular-cli@1.0.0-beta.16

# check
npm list -g --depth=0
```

### Addons
```bash
npm install --save web3 
npm install --save bootstrap@4.0.0-alpha.4
npm install --save @ng-bootstrap/ng-bootstrap
npm install --save font-awesome

# check
npm list --depth=0
npm outdated
```

### Scaffolding 
```bash
# create a new angular project `carenet`
ng new carenet  --style=scss

# scaffold `home` module with `routes`
ng g module home --routing   --dry-run

ng g component shared/header --dry-run
ng g component shared/navbar --dry-run
ng g component shared/footer --dry-run

# scaffold `dashboard` module and sub components
ng g module dashboard lazy --routing   --dry-run
ng g class dashboard/provider model  --dry-run
ng g interface dashboard/payer model  --dry-run

# scaffold `about` lazy module with `routes`
ng g module about lazy --routing   --dry-run

ng g module 404 lazy --routing   --dry-run

ng g service core/ethereum   --dry-run

ng g module core
```


### Upgrade angular-cli
When upgrading to newer versions for `angular-cli` , always clean install
```bash
npm uninstall -g angular-cli
npm cache clean
npm install -g angular-cli@latest
```

### Tips
```
# with --dry-run, you can see what ng command will generate before actually creating them.
ng g module code --dry-run
# get more help for specific ng command
ng generate module --help
```
Ref
https://github.com/angular/angular.io/tree/master/public/docs/_examples/ngmodule/ts
Shared Modules and Lazy Loading
http://blog.angular-university.io/angular2-ngmodule/
