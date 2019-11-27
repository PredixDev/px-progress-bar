/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/**
The basic progress bar indicates the progress of an activity with explicit start and end times, or known duration. The filled portion of the bar grows from left to right to indicate the percentage of progress.

The infinite progress bar indicates an ongoing activity with an indefinite end, such as loading data. The animation hints at forward progress, but since an end time cannot be calculated, does not explicitly display the amount of progress.

### Usage

    <px-progress-bar value="50"></px-progress-bar>

### Styling

The following custom properties and mixins are also available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--px-progress-bar-height` | Height of the progress bar element | `5px`
`--px-progress-bar-fill-color` | Color of the filled portion of the bar | black
`--px-progress-bar-background-color` | Color of the unfilled portion of the bar | lightgray

@element px-progress-bar
@blurb Element providing a progress bar.
@homepage index.html
@demo demo.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import './css/px-progress-bar-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';
Polymer({
  _template: html`
    <style include="px-progress-bar-styles"></style>

    <div id="background" class="background">
      <div id="fill" class="fill">
      </div>
    </div>
`,

  is: 'px-progress-bar',

  properties: {
    /**
     * Represents the value (from 0 to 100) of the percentage progress.
     */
    value: {
      type: Number,
      value: 0
    },
    /**
     * Flag for whether to animate the progress bar. Set to true for an
     * indeterminate or infinite progress bar.
     */
    infinite: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    },
    /**
     * The minimum value for the progress bar, used to calculate the amount
     * that is filled in.
     */
    min: {
      type: Number,
      value: 0,
      observer: '_setMinAriaLabel'
    },
    /**
     * The maximum value for the progress bar, used to calculate the amount
     * that is filled in.
     */
    max: {
      type: Number,
      value: 100,
      observer: '_setMaxAriaLabel'
    },
    /**
     * Internal property for calculating the ratio (from 0 to 1) for sizing
     * elements within the component - also clips negative values and values
     * greater than 100 in its compute function.
     */
    _ratio: {
      type: Number,
      computed: '_computeRatio(value, min, max)',
      observer: '_updateProgress'
    }
  },

  attached: function() {
    this.setAttribute('role', 'progressbar');
  },

  /**
   * Function to transform the filled portion of the progress bar.
   */
  _updateProgress: function(newRatio, oldRatio) {
    if (typeof newRatio !== 'undefined' && newRatio !== oldRatio) {
      var fillEl = dom(this.root).querySelector('#fill');;
      fillEl.setAttribute('style', 'transform:scaleX('+newRatio+')');
      this.setAttribute('aria-valuenow', this.value);
    }
  },

  /**
   * Function to compute the ratio based on the value.
   * Also clips values that are out of range (0 to 100).
   */
  _computeRatio: function(value, min, max) {
    if (typeof value === 'undefined' || typeof min === 'undefined' || typeof max === 'undefined') return;

    if (isNaN(value) || isNaN(min) || isNaN(max) || value < min) {
      return 0;
    }
    if (value > max) {
      return 1;
    }
    return (value-min) / (max-min);
  },

  _setMinAriaLabel: function(newMin, oldMin) {
    if (typeof newMin !== 'undefined' && newMin !== oldMin) {
      this.setAttribute('aria-valuemin', newMin);
    }
  },

  _setMaxAriaLabel: function(newMax, oldMax) {
    if (typeof newMin !== 'undefined' && newMax !== oldMax) {
      this.setAttribute('aria-valuemax', newMax);
    }
  }
});
