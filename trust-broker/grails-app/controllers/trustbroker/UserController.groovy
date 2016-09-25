package trustbroker

import grails.plugin.springsecurity.annotation.Secured
import grails.rest.RestfulController

@Secured('ROLE_ADMIN')
class UserController extends RestfulController {
    def springSecurityService

    static responseFormats = ['json', 'xml']

    UserController() {
        super(User)
    }

    @Secured('ROLE_USER')
    def testAction() {
        def user = springSecurityService.principal
        log.error( user.firstName)
        log.error( user.organizationId)
        log.error( springSecurityService.currentUser?.organization?.name)
        render "test done"
    }
}
