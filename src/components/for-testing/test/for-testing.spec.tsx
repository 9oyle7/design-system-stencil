import { newSpecPage } from '@stencil/core/testing';
import { ForTesting } from '../for-testing';

describe('for-testing', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ForTesting],
      html: `<for-testing></for-testing>`,
    });
    expect(page.root).toEqualHtml(`
      <for-testing>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </for-testing>
    `);
  });
});
