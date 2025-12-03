import { newE2EPage } from '@stencil/core/testing';

describe('for-testing', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<for-testing></for-testing>');

    const element = await page.find('for-testing');
    expect(element).toHaveClass('hydrated');
  });
});
