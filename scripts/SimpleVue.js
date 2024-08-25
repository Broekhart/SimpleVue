class SimpleVue {
  constructor(config) {
    this.el = document.querySelector(config.el);

    if (!this.el) {
      throw new Error(`Element ${config.el} not found`);
    }

    this.template = this.el.innerHTML;

    this.proxy = new Proxy(
      { ...config.data, ...config.methods },
      {
        get: (target, key) => {
          return Reflect.get(target, key);
        },
        set: (target, key, value) => {
          const result = Reflect.set(target, key, value);
          this.interpolate();
          return result;
        },
      }
    );

    this.interpolate();
  }

  interpolate() {
    const { el, template, proxy } = this;
    el.innerHTML = template.replace(/\{\{\s*(\w+)\s*\}\}/g, (match, key) => {
      return key in proxy ? String(proxy[key]) : match;
    });

    el.querySelectorAll('[\\@click]').forEach((el) => {
      const methodName = el.getAttribute('@click');
      if (methodName && methodName in proxy) {
        el.addEventListener('click', () => {
          proxy[methodName]();
        });
      }
    });
  }
}

export default SimpleVue;
