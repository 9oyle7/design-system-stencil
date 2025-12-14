import { newSpecPage } from '@stencil/core/testing';
import { ThemeSwitcher } from '../theme-switcher';

describe('theme-switcher', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ThemeSwitcher],
      html: `<theme-switcher></theme-switcher>`,
    });
    expect(page.root).toEqualHtml(`
      <theme-switcher>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </theme-switcher>
    `);
  });
});
