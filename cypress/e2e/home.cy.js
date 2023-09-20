describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://staging.connectedbarrel.com/')
    cy
        .get('#employee_login')
        .type('admin_user@smartbarrel.io')

    cy
        .get('#employee_password')
        .type('$m@rT2o!9')

    cy
        .get('#submit')
        .click()
  })
})