if (typeof mermaid !== 'undefined') {
  try {
    mermaid.initialize({ startOnLoad: true });
  } catch (e) {
    console.warn('mermaid init failed:', e);
  }
} else {
  // If mermaid is not yet loaded, try to wait for script load
  (function waitForMermaid() {
    if (typeof mermaid !== 'undefined') {
      try { mermaid.initialize({ startOnLoad: true }); } catch (e) { console.warn('mermaid init failed:', e); }
    } else if (window.requestAnimationFrame) {
      requestAnimationFrame(waitForMermaid);
    } else {
      setTimeout(waitForMermaid, 50);
    }
  })();
}
