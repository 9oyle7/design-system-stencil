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


        <fa-icon iconName="coffee" iconSize="xs" color="primary"></fa-icon>
        <fa-icon iconName="coffee" iconSize="xs" color="secondary"></fa-icon>
        <fa-icon iconName="coffee" iconSize="xs" color="success"></fa-icon>
        <fa-icon iconName="coffee" iconSize="xs" color="danger"></fa-icon>
        <fa-icon iconName="coffee" iconSize="xs" color="warning"></fa-icon>

        <fa-icon iconName="coffee" iconSize="sm" color="primary"></fa-icon>
        <fa-icon iconName="coffee" iconSize="sm" color="secondary"></fa-icon>
        <fa-icon iconName="coffee" iconSize="sm" color="success"></fa-icon>
        <fa-icon iconName="coffee" iconSize="sm" color="danger"></fa-icon>
        <fa-icon iconName="coffee" iconSize="sm" color="warning"></fa-icon>

        <fa-icon iconName="coffee" iconSize="md" color="primary"></fa-icon>
        <fa-icon iconName="coffee" iconSize="md" color="secondary"></fa-icon>
        <fa-icon iconName="coffee" iconSize="md" color="success"></fa-icon>
        <fa-icon iconName="coffee" iconSize="md" color="danger"></fa-icon>
        <fa-icon iconName="coffee" iconSize="md" color="warning"></fa-icon>

        <fa-icon iconName="coffee" iconSize="lg" color="primary"></fa-icon>
        <fa-icon iconName="coffee" iconSize="lg" color="secondary"></fa-icon>
        <fa-icon iconName="coffee" iconSize="lg" color="success"></fa-icon>
        <fa-icon iconName="coffee" iconSize="lg" color="danger"></fa-icon>
        <fa-icon iconName="coffee" iconSize="lg" color="warning"></fa-icon>


      </div>
    );
  }
}
