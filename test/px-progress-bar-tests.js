/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

describe('progress bar with value below range', () => {
  it('does not fill the progress bar', () => {
    const progressBar = fixture('ValueBelowRange');
    const fill = Polymer.dom(progressBar.root).querySelector('#fill');
    expect(fill.style.transform).to.equal('scaleX(0)');
  });
});

describe('progress bar with value in range', () => {
  it('fills some of the progress bar', () => {
    const progressBar = fixture('ValueInRange');
    const fill = Polymer.dom(progressBar.root).querySelector('#fill');
    expect(fill.style.transform).to.equal('scaleX(0.8)');
  });
});

describe('progress bar with infinite value', () => {
  it('fills the entire progress bar during the animation', () => {
    const progressBar = fixture('ValueInfinite');
    const fill = Polymer.dom(progressBar.root).querySelector('#fill');
    const state = window.getComputedStyle(fill).getPropertyValue("animation-play-state");
    const name = window.getComputedStyle(fill).getPropertyValue("animation-name").split('-')[0];

    expect(name).to.equal('progress');
    expect(state).to.equal('running');
  });
});

describe('progress bar with custom min and max', () => {
  it('calculates the right ratio based on the min, max, and value', () => {
    const progressBar = fixture('CustomMinMax');
    const ratio = progressBar._ratio.toFixed(2);
    expect(ratio).to.equal('0.79');
  });
});
