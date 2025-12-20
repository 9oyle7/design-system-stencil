import { Component, Prop, h, Host } from '@stencil/core';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { ICONS, type IconName } from '../../icons';
import type { AppColor, AppSize } from '../../design-system/theme';

@Component({
  tag: 'ds-icon',
  styleUrl: 'ds-icon.css',
  shadow: true,
})
export class DsIcon {
  @Prop() iconName!: IconName;
  @Prop() iconSize: AppSize = 'md';
  @Prop() color: AppColor = 'default';

  render() {
    const def = ICONS[this.iconName];
    if (!def) return null;

    const faIcon = icon(def);

    return (
      <Host
        color={this.color}
        class={{ [`size-${this.iconSize}`]: true }}
      >
        <span class="ds-wrapper" innerHTML={faIcon.html[0]} />
      </Host>
    );
  }
}
