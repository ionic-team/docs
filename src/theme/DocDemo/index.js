import React, { useState } from 'react';
import clsx from 'clsx';

import './demo.css';

function DocDemo(props) {
  const [ionicMode, setIonicMode] = useState('ios');

  /* TODO:
  iframe!: HTMLIFrameElement;
  iframeLoaded = false;
  messageQueue: CustomEvent[] = [];

  @Listen('demoMessage', { target: 'window' })
  async handleMessage(msg: CustomEvent) {
    this.iframeLoaded
      ? this.postMessage(msg)
      : this.messageQueue.push(msg);
  }

  postMessage({ detail }: CustomEvent) {
    try {
      if (this.iframe && this.iframe.contentWindow) {
        this.iframe.contentWindow.postMessage(detail, '*');
      }
    } catch (e) {
      // ignore
    }
  }
  */

  const onIframeLoad = () => {
    /* TODO:
    this.messageQueue.forEach(this.postMessage.bind(this));
    this.messageQueue = [];
    this.iframeLoaded = true;
    */
  };

  const modeToggle = (
    <div class="docs-demo-mode-toggle">
      {['ios', 'md'].map(mode => (
        <button
          className={clsx({
            'is-selected': mode === ionicMode
          })}
          title={`Toggle ${mode === 'ios' ? 'iOS' : 'Android'} mode`}
          onClick={() => setIonicMode(mode)}
        >
          {mode === 'ios' ? 'iOS' : 'Android'}
        </button>
      ))}
    </div>
  );

  const sourceLink = (
    <a
      href={props.source}
      class="docs-demo-source"
      target="_blank"
      title="Demo Source"
    >
      <ion-icon name="open" /> View Source
    </a>
  );
  let iframe;

  const device = (
    <div class={`docs-demo-device ${ionicMode}`}>
      <figure>
        <svg class="docs-demo-device__md-bar" viewBox="0 0 1384.3 40.3">
          <path class="st0" d="M1343 5l18.8 32.3c.8 1.3 2.7 1.3 3.5 0L1384 5c.8-1.3-.2-3-1.7-3h-37.6c-1.5 0-2.5 1.7-1.7 3z" />
          <circle class="st0" cx="1299" cy="20.2" r="20" />
          <path class="st0" d="M1213 1.2h30c2.2 0 4 1.8 4 4v30c0 2.2-1.8 4-4 4h-30c-2.2 0-4-1.8-4-4v-30c0-2.3 1.8-4 4-4zM16 4.2h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
        </svg>
        <svg class="docs-demo-device__ios-notch" viewBox="0 0 219 31">
          <path d="M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z" fill-rule="evenodd" />
        </svg>
        <iframe
          loading="lazy"
          importance="low"
          onLoad={onIframeLoad}
          src={`${props.url}?ionic:mode=${ionicMode}`}
          ref={node => {
            iframe = node;
          }}
        />
      </figure>
    </div>
  );

  return (
    <docs-demo>
      {modeToggle}
      {device}
      {sourceLink}
    </docs-demo>
  );
}

export default DocDemo;
