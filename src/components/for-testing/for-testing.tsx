import { Component, h } from '@stencil/core';

@Component({
  tag: 'for-testing',
  styleUrl: 'for-testing.css',
  // shadow: true,
})
export class ForTesting {
  render() {
    return (
      <div>
        <fa-icon iconName="coffee" iconSize="sm"></fa-icon>
        <fa-icon iconName="delete" iconSize="md" class="text-red-500"></fa-icon>
        <fa-icon iconName="twitter" iconSize="lg"></fa-icon>
      </div>
    );
  }
}
