import { Component, Prop, h, Host } from '@stencil/core';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { ICONS, type IconName } from '../../icons';

@Component({
  tag: 'fa-icon',
  styleUrl: 'fa-icon.css',
  shadow: true,
})
export class FaIcon {
  @Prop() iconName!: IconName;
  @Prop() iconSize: 'sm' | 'md' | 'lg' = 'md';

  render() {
    const def = ICONS[this.iconName];
    if (!def) return null;

    const faIcon = icon(def);

    return (
      <Host class={{ [`size-${this.iconSize}`]: true }}>
        {/* هذا داخل الـ shadow root */}
        <span class="fa-wrapper" innerHTML={faIcon.html[0]} />
      </Host>
    );
  }
}
