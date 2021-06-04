function showInfo() {
  return {
    show: false,
    trigger: {
      ["@click"]() {
        this.show = true;
      },
    },
    info: {
      ["x-show"]() {
        return this.show;
      },
      ["@click.away"]() {
        this.show = false;
      },
    },
  };
}
