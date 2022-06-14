function euclidianDistance([x1, y1], [x2, y2]) {
    const dx = Math.pow(x2 - x1, 2);
    const dy = Math.pow(y2 - y1, 2);
    return Math.sqrt(dx + dy);
  }