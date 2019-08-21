import { Selector } from 'testcafe';

fixture `Knovva Home Page`
    .page `https://knovva.com/`;

//This test verifies that all components of new account form is visible (text fields and term and condition link). 
//When user hasn't keyed in any information, the SIGN UP button should stay disabled. 

test('Check Create Account Form elements', async t => {
    await t
        .click(Selector('#menu-item-45').find('a').withText('Login'))
        .click(Selector('button').withText('CREATE ACCOUNT'))
        .expect(Selector('#username').exists).eql(true)
        .expect(Selector('#firstname').exists).eql(true)
        .expect(Selector('#lastname').exists).eql(true)
        .expect(Selector('#email').exists).eql(true)
        .expect(Selector('#password').exists).eql(true)
        .expect(Selector('#confirmPassword').exists).eql(true)
        .expect(Selector('#classCode').exists).eql(true)
        .expect(Selector('div').withText('I agree to terms and conditions').nth(5).find('input').exists).eql(true)
        .expect(Selector('a').withText('terms and conditions').getAttribute('href')).contains('http://cdn.knovva.com/knovva_terms_and_conditions.pdf')
        .expect(Selector('button').withText('SIGN UP').hasAttribute('disabled')).ok();
});
