import { newE2EPage } from '@stencil/core/testing';

describe('ds-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ds-icon></ds-icon>');

    const element = await page.find('ds-icon');
    expect(element).toHaveClass('hydrated');
  });
});
