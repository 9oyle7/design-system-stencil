import { Component, h } from '@stencil/core';

@Component({
  tag: 'for-testing',
  styleUrl: 'for-testing.css',
  shadow: true,
})
export class ForTesting {
  render() {
    return (
      <div>
            <section>
      <h1>🎨 Design System – Colors</h1>

      <h2>Brand / Status</h2>
      <div class="flex">
        <div class="color-card">
          <div class="swatch" style={{ background: 'var(--color-primary)' }}></div>
          <div class="name">Primary</div>
          <div class="var">--color-primary</div>
        </div>

        <div class="color-card">
          <div class="swatch" style={{ background: 'var(--color-secondary)' }}></div>
          <div class="name">Secondary</div>
          <div class="var">--color-secondary</div>
        </div>

        <div class="color-card">
          <div class="swatch" style={{ background: 'var(--color-success)' }}></div>
          <div class="name">Success</div>
          <div class="var">--color-success</div>
        </div>

        <div class="color-card">
          <div class="swatch" style={{ background: 'var(--color-danger)' }}></div>
          <div class="name">Danger</div>
          <div class="var">--color-danger</div>
        </div>

        <div class="color-card">
          <div class="swatch" style={{ background: 'var(--color-warning)' }}></div>
          <div class="name">Warning</div>
          <div class="var">--color-warning</div>
        </div>
      </div>

      <h2>Text</h2>
      <div class="flex">
        <div class="color-card">
          <div class="swatch" style={{ background: 'var(--color-fg-default)' }}></div>
          <div class="name">FG Default</div>
          <div class="var">--color-fg-default</div>
        </div>

        <div class="color-card">
          <div class="swatch" style={{ background: 'var(--color-fg-muted)' }}></div>
          <div class="name">FG Muted</div>
          <div class="var">--color-fg-muted</div>
        </div>
      </div>

      <h2>Surfaces</h2>
      <div class="flex">
        <div class="color-card">
          <div class="swatch" style={{ background: 'var(--color-bg-body)' }}></div>
          <div class="name">Body</div>
          <div class="var">--color-bg-body</div>
        </div>

        <div class="color-card">
          <div class="swatch" style={{ background: 'var(--color-bg-surface)' }}></div>
          <div class="name">Surface</div>
          <div class="var">--color-bg-surface</div>
        </div>
      </div>
    </section>

      </div>
    );
  }
}
