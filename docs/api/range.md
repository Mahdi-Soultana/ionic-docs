---
title: "ion-range"
hide_table_of_contents: true
demoUrl: "/docs/demos/api/range/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/range/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@site/static/auto-generated/range/props.md';
import Events from '@site/static/auto-generated/range/events.md';
import Methods from '@site/static/auto-generated/range/methods.md';
import Parts from '@site/static/auto-generated/range/parts.md';
import CustomProps from '@site/static/auto-generated/range/custom-props.md';
import Slots from '@site/static/auto-generated/range/slots.md';

<head>
  <title>Range Slider | ion-range: Slider Knob Controls with Labels</title>
  <meta name="description" content="ion-range lets you select from a range of values by moving the slider. It accepts dual knobs but one controls the value and labels can be placed on either side." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';
import APITOCInline from '@components/page/api/APITOCInline';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">Contents</h2>

<APITOCInline
  toc={toc}
  maxHeadingLevel={2}
  autogenerated={[Props, Events, Methods, Parts, CustomProps, Slots]}
/>



The Range slider lets users select from a range of values by moving
the slider knob. It can accept dual knobs, but by default one knob
controls the value of the range.

## Range Labels

Labels can be placed on either side of the range by adding the
`slot="start"` or `slot="end"` to the element. The element doesn't have to
be an `ion-label`, it can be added to any element to place it to the
left or right of the range.

## Custom Pin Formatters

When using a pin, the default behavior is to round the value that gets displayed using `Math.round()`. This behavior can be customized by passing in a formatter function to the `pinFormatter` property. See the [Usage](#usage) section for an example.

## Interfaces

### RangeChangeEventDetail

```typescript
interface RangeChangeEventDetail {
  value: RangeValue;
}
```

### RangeKnobMoveStartEventDetail

```typescript
interface RangeKnobMoveStartEventDetail {
  value: RangeValue;
}
```

### RangeKnobMoveEndEventDetail

```typescript
interface RangeKnobMoveEndEventDetail {
  value: RangeValue;
}
```

### RangeCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface RangeCustomEvent extends CustomEvent {
  detail: RangeChangeEventDetail;
  target: HTMLIonRangeElement;
}
```

## Types

### RangeValue

```typescript
type RangeValue = number | { lower: number, upper: number };
```



## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-list>
  <ion-item>
    <ion-range color="danger" [pin]="true"></ion-range>
  </ion-item>

  <ion-item>
    <ion-range min="-200" max="200" color="secondary">
      <ion-label slot="start">-200</ion-label>
      <ion-label slot="end">200</ion-label>
    </ion-range>
  </ion-item>

  <ion-item>
    <ion-range min="20" max="80" step="2">
      <ion-icon size="small" slot="start" name="sunny"></ion-icon>
      <ion-icon slot="end" name="sunny"></ion-icon>
    </ion-range>
  </ion-item>

  <ion-item>
    <ion-range min="1000" max="2000" step="100" snaps="true" color="secondary"></ion-range>
  </ion-item>

  <ion-item>
    <ion-range min="1000" max="2000" step="100" snaps="true" ticks="false" color="secondary"></ion-range>
  </ion-item>

  <ion-item>
    <ion-range dualKnobs="true" min="21" max="72" step="3" snaps="true"></ion-range>
  </ion-item>
  
  <ion-item>
    <ion-range min="0" max="100" [pinFormatter]="customFormatter" [pin]="true"></ion-range>
  </ion-item>
</ion-list>
```

```typescript
import { Component } from '@angular/core';

@Component({…})
export class MyComponent {
  constructor() {}
  
  public customFormatter(value: number) {
    return `${value}%`
  }
}
```

</TabItem>


<TabItem value="javascript">

```html
<ion-list>
  <ion-item>
    <ion-range color="danger" pin="true"></ion-range>
  </ion-item>

  <ion-item>
    <ion-range min="-200" max="200" color="secondary">
      <ion-label slot="start">-200</ion-label>
      <ion-label slot="end">200</ion-label>
    </ion-range>
  </ion-item>

  <ion-item>
    <ion-range min="20" max="80" step="2">
      <ion-icon size="small" slot="start" name="sunny"></ion-icon>
      <ion-icon slot="end" name="sunny"></ion-icon>
    </ion-range>
  </ion-item>

  <ion-item>
    <ion-range min="1000" max="2000" step="100" snaps="true" color="secondary"></ion-range>
  </ion-item>

  <ion-item>
    <ion-range min="1000" max="2000" step="100" snaps="true" ticks="false" color="secondary"></ion-range>
  </ion-item>

  <ion-item>
    <ion-range dual-knobs="true" min="21" max="72" step="3" snaps="true"></ion-range>
  </ion-item>
  
  <ion-item>
    <ion-range min="0" max="100" pin="true" id="custom-range"></ion-range>
  </ion-item>
</ion-list>

<script>
  const customRange = document.querySelector('#custom-range');
  customRange.pinFormatter = (value) => `${value}%`; 
</script>
```


</TabItem>


<TabItem value="react">

```tsx
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonRange, IonLabel, IonIcon, IonItemDivider } from '@ionic/react';
import { sunny } from 'ionicons/icons';
import { RangeValue } from '@ionic/core';

export const RangeExamples: React.FC = () => {

  const [value, setValue] = useState(0);
  const [rangeValue, setRangeValue] = useState<{
    lower: number;
    upper: number;
  }>({ lower: 0, upper: 0 });
  
  const customFormatter = (value: number) => `${value}%`;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IonRange Examples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>Default</IonItemDivider>
          <IonItem>
            <IonRange pin={true} value={value} onIonChange={e => setValue(e.detail.value as number)} />
          </IonItem>
          <IonItem>
            <IonLabel>Value: {value}</IonLabel>
          </IonItem>

          <IonItemDivider>Min & Max</IonItemDivider>
          <IonItem>
            <IonRange min={-200} max={200} color="secondary">
              <IonLabel slot="start">-200</IonLabel>
              <IonLabel slot="end">200</IonLabel>
            </IonRange>
          </IonItem>

          <IonItemDivider>Icons</IonItemDivider>
          <IonItem>
            <IonRange min={20} max={80} step={2}>
              <IonIcon size="small" slot="start" icon={sunny} />
              <IonIcon slot="end" icon={sunny} />
            </IonRange>
          </IonItem>

          <IonItemDivider>With Snaps & Ticks</IonItemDivider>
          <IonItem>
            <IonRange min={1000} max={2000} step={100} snaps={true} color="secondary" />
          </IonItem>

          <IonItemDivider>With Snaps & No Ticks</IonItemDivider>
          <IonItem>
            <IonRange min={1000} max={2000} step={100} snaps={true} ticks={false} color="secondary" />
          </IonItem>

          <IonItemDivider>Dual Knobs</IonItemDivider>
          <IonItem>
            <IonRange dualKnobs={true} min={0} max={60} step={3} snaps={true} onIonChange={e => setRangeValue(e.detail.value as any)} />
          </IonItem>
          <IonItem>
            <IonLabel>Value: lower: {rangeValue.lower} upper: {rangeValue.upper}</IonLabel>
          </IonItem>
          
          <IonItem>
            <IonRange min={0} max={100} pinFormatter={customFormatter} pin={true}></IonRange>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
```


</TabItem>


<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'range-example',
  styleUrl: 'range-example.css'
})
export class RangeExample {
  private customFormatter = (value: number) => `${value}%`;
  
  render() {
    return [
      <ion-list>
        <ion-item>
          <ion-range color="danger" pin={true}></ion-range>
        </ion-item>

        <ion-item>
          <ion-range min={-200} max={200} color="secondary">
            <ion-label slot="start">-200</ion-label>
            <ion-label slot="end">200</ion-label>
          </ion-range>
        </ion-item>

        <ion-item>
          <ion-range min={20} max={80} step={2}>
            <ion-icon size="small" slot="start" name="sunny"></ion-icon>
            <ion-icon slot="end" name="sunny"></ion-icon>
          </ion-range>
        </ion-item>

        <ion-item>
          <ion-range min={1000} max={2000} step={100} snaps={true} color="secondary"></ion-range>
        </ion-item>

        <ion-item>
          <ion-range min={1000} max={2000} step={100} snaps={true} ticks={false} color="secondary"></ion-range>
        </ion-item>

        <ion-item>
          <ion-range dualKnobs={true} min={21} max={72} step={3} snaps={true}></ion-range>
        </ion-item>
        
        <ion-item>
          <ion-range min="0" max="100" pinFormatter={this.customFormatter} pin={true}></ion-range>
        </ion-item>
      </ion-list>
    ];
  }
}
```


</TabItem>


<TabItem value="vue">

```html
<template>
  <ion-list>
    <ion-item>
      <ion-range color="danger" :pin="true"></ion-range>
    </ion-item>

    <ion-item>
      <ion-range min="-200" max="200" color="secondary">
        <ion-label slot="start">-200</ion-label>
        <ion-label slot="end">200</ion-label>
      </ion-range>
    </ion-item>

    <ion-item>
      <ion-range min="20" max="80" step="2">
        <ion-icon size="small" slot="start" name="sunny"></ion-icon>
        <ion-icon slot="end" name="sunny"></ion-icon>
      </ion-range>
    </ion-item>

    <ion-item>
      <ion-range min="1000" max="2000" step="100" snaps="true" color="secondary"></ion-range>
    </ion-item>

    <ion-item>
      <ion-range min="1000" max="2000" step="100" snaps="true" ticks="false" color="secondary"></ion-range>
    </ion-item>

    <ion-item>
      <ion-range ref="rangeDualKnobs" dual-knobs="true" min="21" max="72" step="3" snaps="true"></ion-range>
    </ion-item>
    
    <ion-item>
      <ion-range min="0" max="100" :pin-formatter="customFormatter" :pin="true"></ion-range>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
import { IonItem, IonLabel, IonList, IonRange } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {  IonItem, IonLabel, IonList, IonRange },
  mounted() {
    // Sets initial value for dual-knob ion-range
    this.$refs.rangeDualKnobs.value = { lower: 24, upper: 42 };
  },
  setup() {
    const customFormatter = (value: number) => `${value}%`;
    
    return { customFormatter };
  }
});
</script>
```


</TabItem>

</Tabs>

<Props />
<Events />
<Methods />
<Parts />
<CustomProps />
<Slots />