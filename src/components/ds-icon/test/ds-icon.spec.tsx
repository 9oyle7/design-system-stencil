import { newSpecPage } from '@stencil/core/testing';
import { DsIcon } from '../ds-icon';

describe('ds-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DsIcon],
      html: `<ds-icon></ds-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ds-icon>
    `);
  });
});
