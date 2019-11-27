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
/* Common imports */
/* Common demo imports */
/* Imports for this component */
/* Demo DOM module */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-icon-set/px-icon-set.js';
import 'px-demo/px-demo-header.js';
import 'px-demo/px-demo-api-viewer.js';
import 'px-demo/px-demo-footer.js';
import 'px-demo/px-demo-configs.js';
import 'px-demo/px-demo-props.js';
import 'px-demo/px-demo-interactive.js';
import 'px-demo/px-demo-component-snippet.js';
import '../px-progress-bar.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <!-- Header -->
    <px-demo-header module-name="px-progress-bar" description="The basic progress bar indicates the progress of an activity with explicit start and end times, or known duration.
          The filled portion of the bar grows from left to right to indicate the percentage of progress.
          The infinite progress bar indicates an ongoing activity with an indefinite end, such as loading data. The animation hints at
          forward progress, but since an end time cannot be calculated, does not explicitly display the amount of progress." mobile="" tablet="" desktop="">
    </px-demo-header>

    <!-- Interactive -->
    <px-demo-interactive>
      <!-- Configs -->
      <px-demo-configs slot="px-demo-configs" configs="[[configs]]" props="{{props}}" chosen-config="{{chosenConfig}}"></px-demo-configs>

      <!-- Props -->
      <px-demo-props slot="px-demo-props" props="{{props}}" config="[[chosenConfig]]"></px-demo-props>

      <!-- Component ---------------------------------------------------------->
      <px-demo-component slot="px-demo-component" style="width:100%;">
        <px-progress-bar value="{{props.value.value}}" min="{{props.min.value}}" max="{{props.max.value}}" infinite="{{props.infinite.value}}">
        </px-progress-bar>
      </px-demo-component>
      <!-- END Component ------------------------------------------------------>

      <px-demo-component-snippet slot="px-demo-component-snippet" element-properties="{{props}}" element-name="px-progress-bar">
      </px-demo-component-snippet>
    </px-demo-interactive>

    <!-- API Viewer -->
    <px-demo-api-viewer source="px-progress-bar"></px-demo-api-viewer>

    <!-- Footer -->
    <px-demo-footer></px-demo-footer>
`,

  is: 'px-progress-bar-demo',

  properties: {

    props: {
      type: Object,
      value: function(){ return this.demoProps; }
    },

    configs: {
      type: Array,
      value: function(){
        return [
          {
            configName: 'Default',
            value: 20,
            min: 0,
            max: 100,
            infinite: false
          },
          {
            configName: 'Infinite',
            configHideProps: ['value', 'min', 'max'],
            value: 100,
            min: 0,
            max: 100,
            infinite: true
          }
        ]
      }
    }
  },

  /**
   * A reference for `this.props`. Read the documentation there.
   */
  demoProps: {
    value: {
      type: String,
      defaultValue: 20,
      inputType: 'number'
    },
    min: {
      type: Number,
      defaultValue: 0,
      inputType: 'number'
    },
    max: {
      type: Number,
      defaultValue: 100,
      inputType: 'number'
    },
    infinite: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    }
  }
});
