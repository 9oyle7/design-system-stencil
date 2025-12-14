import { newE2EPage } from '@stencil/core/testing';

describe('theme-switcher', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<theme-switcher></theme-switcher>');

    const element = await page.find('theme-switcher');
    expect(element).toHaveClass('hydrated');
  });
});
