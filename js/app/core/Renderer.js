export class Renderer {
  render(target, content) {
    if (!target) return;
    target.innerHTML = content;
  }
}
