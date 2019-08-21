import { Selector } from 'testcafe';

fixture `Knovva Home Page`
    .page `https://knovva.com/`;

//This test verifies the content under Course menu sub item, checking whether certain heading texts exist and 'Start learning' is linked to correct URL.

test('Verify link from Submenu item', async t => {
    await t
        .click(Selector('#menu-item-42').find('a').withText('Courses'))
        .expect(Selector('h1').withText('Today').innerText).eql("Today’s Learners. Tomorrow’s Leaders")
        .expect(Selector('h3').withText('Traditional classrooms can').innerText).eql("Traditional classrooms can’t keep up with today’s global, digital economy. Knovva can.")
        .expect(Selector('a').withText('Start Learning').getAttribute('href')).contains('https://online.knovva.com');

});