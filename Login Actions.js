import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

fixture `Knovva Home Page`
    .page `https://knovva.com/`;

test('Login Actions', async t => {    
  const getURL = ClientFunction(() => window.location.href);
  const url = await getURL();

   await t
        .setNativeDialogHandler(() => true)
        .click(Selector('#menu-item-45').find('a').withText('Login'))
        .typeText(Selector('#emailUsername'), 'nphan')
        .pressKey('tab')
        .typeText(Selector('#password'), 'Testing@123')
        .click(Selector('button').withText('LOGIN'))
         .expect(getURL()).contains('https://online.knovva.com/dashboard');
});

    