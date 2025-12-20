import { Component, Prop, h, Host } from '@stencil/core';
import type { AppColor, AppRadius, AppSize } from '../../design-system/theme';

@Component({
  tag: 'ds-button',
  styleUrl: 'ds-button.css',
  shadow: true,
})
export class DsButton {
  @Prop() color: AppColor = 'primary';
  @Prop() size: AppSize = 'md';
  @Prop() variant: 'solid' | 'outline' | 'ghost' | 'soft' | 'link' = 'solid';
  @Prop() disabled = false;
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';
  @Prop() radius: AppRadius = 'md';

  render() {
    return (
      <Host
        color={this.color}
        class={{
          [`size-${this.size}`]: true,      // نفس أسلوبك في ds-icon
          [`variant-${this.variant}`]: true,
          [`radius-${this.radius}`]: true,
          'is-disabled': this.disabled,
        }}
      >
        <button class="btn" type={this.type} disabled={this.disabled}>
          <slot />
        </button>
      </Host>
    );
  }
}
